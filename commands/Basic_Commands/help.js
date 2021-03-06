module.exports = {
    name: 'help',
    description: 'help module',
    aliases: [],
    cooldown: 1,
    async execute(message) {
        if(message.deletable) message.delete()
        const { MessageEmbed } = require('discord.js');
        const { prefix } = require('../../config.json');
        const p = prefix

        const number1 = `[3]`;
        const number2 = `[4]`
        const number3 = `[4]`
        const number4 = `[7]`
        const number5 = `[7]`
        const number6 = `[4]`

        const basic_commands = `\n\n**<:Para:866091625922035762> ${p}daily**\n Daily amounts  gets \n\n**š§° ${p}cash**\n  \[@user] & Info your balance\n\n**ā»ļø ${p}send**\n Transfer a Zooye cash & \<@user> <amount>\n\n**š„ ${p}rank**\n  \[@user] & Info your xp\n\n **<:add:855359850229530655> Zooye's Links**
[Invite bot ](https://discord.com/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) | [Zooye's Server](https://discord.gg/XrPH6tHuPv) š`;
    //    const crate_commands = `\nā ${p}hourly\nā ${p}daily\nā ${p}booster\nā ${p}member`;
    //    const income_commands = `\nā ${p}beg\nā ${p}fish\nā ${p}work\nā ${p}mine`;
        const luck_commands = `\n\n**š° ${p}slots**  \`<bet>\`\n\n**šŖ ${p}roulette**  \`<bet>\`\n\n**š² ${p}coinflip**  \`<bet>\`\n\n**š ${p}blackjack**  \<bet>\n\n**<:add:855359850229530655> Zooye's Links**\n[Invite bot ](https://discord.com/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) | [Zooye's Server](https://discord.gg/XrPH6tHuPv) š`;
        const other_commands = `\n\n**š ${p}kiss** [@user]\n\n**š„ŗ ${p}hug** [@user]\n\n**š ${p}quote** <@user> \`<question>\`\n\n**ā°ļø ${p}rep** \`<@user> \`\n\n**š„¶ ${p}meme** \`<@user>\`\n\n**š« ${p}kill**  \[@user or id]\n\n**<:add:855359850229530655> Zooye's Links**\n[Invite bot ](https://discord.com/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) | [Zooye's Server](https://discord.gg/XrPH6tHuPv) š`;
        const perk_commands = `\n\n**ā ${p}invite** \`(add to server)\`\n\n**š¤ ${p}userinfo**  <@user>\n\n**š ${p}server** \ info your server \n\n**ā­ļø ${p}info** \(info Zooye)\n\n **<:add:855359850229530655> Zooye's Links**
[Invite bot ](https://discord.com/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) | [Zooye's Server](https://discord.gg/XrPH6tHuPv) š`;

        const basic = `**ā­ļø Economy ā­ļø**${basic_commands}`;
   //     const crate = `**š§° Crate Commands **${crate_commands}`;
    //    const income = `**š° Income Commands **${income_commands}`;
        const luck = `**š§© Gambling š§©**${luck_commands}`;
        const other = `**š Funny š**${other_commands}`;
        const perk = `**āØ Public āØ **${perk_commands}`;

        let pages = [basic,  luck, other, perk];
        let page = 1;
        
        const embed2 = new MessageEmbed()
        .setColor('RED')

        const embed = new MessageEmbed()
        .setColor("#00FA9A")
        .setImage("https://media.discordapp.net/attachments/855327158339371038/871812093484105879/image0.jpg")
     //   .setAuthor(`Zooye`)
        .setFooter(`Page ${page} of ${pages.length} `)
       .setThumbnail("https://media.discordapp.net/attachments/849448966444810273/871997586511376424/image0.gif")
        .setDescription(pages[page-1])

        
        message.channel.send({embed}).then(msg => {
          msg.react('ā¬ļø').then( r => {
            msg.react('āŗ')
            msg.react('ā”ļø')

            function stopAll() {
              stop.stop()
              forwards.stop()
              backwards.stop()
              msg.reactions.removeAll()
              return;
            }

            setTimeout(() => {
              embed2.setDescription('ā Help Module Closed')
              msg.edit(embed2)
              stopAll()
            }, 100000);
        
            const backwardsFilter = (reaction, user) => reaction.emoji.name === 'ā¬ļø' && user.id === message.author.id
            const forwardsFilter = (reaction, user) => reaction.emoji.name === 'ā”ļø' && user.id === message.author.id
            const stopFilter = (reaction, user) => reaction.emoji.name === 'āŗ' && user.id === message.author.id
        
            const backwards = msg.createReactionCollector(backwardsFilter, {timer: 10000})
            const forwards = msg.createReactionCollector(forwardsFilter, {timer: 10000})
            const stop = msg.createReactionCollector(stopFilter, {timer: 10000})
        
            backwards.on('collect', (r, u) => {
                if (page === 1) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                page--
                embed.setDescription(pages[page-1])
                embed.setFooter(`Page ${page} of ${pages.length} `)
                msg.edit(embed)
                r.users.remove(r.users.cache.filter(u => u === message.author).first())
            })
        
            forwards.on('collect', (r, u) => {
                if (page === pages.length) return r.users.remove(r.users.cache.filter(u => u === message.author).first())
                page++
                embed.setDescription(pages[page-1])
                embed.setFooter(`Page ${page} of ${pages.length} `)
                msg.edit(embed)
                r.users.remove(r.users.cache.filter(u => u === message.author).first())
            })

            stop.on('collect', (r, u) => {
              embed2.setDescription('ā Help Module Closed')
              r.users.remove(r.users.cache.filter(u => u === message.author).first())
              msg.edit(embed2)
              stopAll()
            })
          })
        })
    }
}