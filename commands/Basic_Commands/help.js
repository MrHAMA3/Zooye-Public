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

        const basic_commands = `\n\n**<:Para:866091625922035762> ${p}daily**\n Daily amounts  gets \n\n**🧰 ${p}cash**\n  \[@user] & Info your balance\n\n**♻️ ${p}send**\n Transfer a Zooye cash & \<@user> <amount>\n\n**🥇 ${p}rank**\n  \[@user] & Info your xp\n\n **<:add:855359850229530655> Zooye's Links**
[Invite bot ](https://discord.com/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) | [Zooye's Server](https://discord.gg/XrPH6tHuPv) 🔗`;
    //    const crate_commands = `\n● ${p}hourly\n● ${p}daily\n● ${p}booster\n● ${p}member`;
    //    const income_commands = `\n● ${p}beg\n● ${p}fish\n● ${p}work\n● ${p}mine`;
        const luck_commands = `\n\n**🎰 ${p}slots**  \`<bet>\`\n\n**🎪 ${p}roulette**  \`<bet>\`\n\n**🎲 ${p}coinflip**  \`<bet>\`\n\n**🃏 ${p}blackjack**  \<bet>\n\n**<:add:855359850229530655> Zooye's Links**\n[Invite bot ](https://discord.com/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) | [Zooye's Server](https://discord.gg/XrPH6tHuPv) 🔗`;
        const other_commands = `\n\n**💋 ${p}kiss** [@user]\n\n**🥺 ${p}hug** [@user]\n\n**💌 ${p}quote** <@user> \`<question>\`\n\n**⚰️ ${p}rep** \`<@user> \`\n\n**🥶 ${p}meme** \`<@user>\`\n\n**🔫 ${p}kill**  \[@user or id]\n\n**<:add:855359850229530655> Zooye's Links**\n[Invite bot ](https://discord.com/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) | [Zooye's Server](https://discord.gg/XrPH6tHuPv) 🔗`;
        const perk_commands = `\n\n**✅ ${p}invite** \`(add to server)\`\n\n**👤 ${p}userinfo**  <@user>\n\n**📊 ${p}server** \ info your server \n\n**⭐️ ${p}info** \(info Zooye)\n\n **<:add:855359850229530655> Zooye's Links**
[Invite bot ](https://discord.com/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) | [Zooye's Server](https://discord.gg/XrPH6tHuPv) 🔗`;

        const basic = `**⭐️ Economy ⭐️**${basic_commands}`;
   //     const crate = `**🧰 Crate Commands **${crate_commands}`;
    //    const income = `**💰 Income Commands **${income_commands}`;
        const luck = `**🧩 Gambling 🧩**${luck_commands}`;
        const other = `**😂 Funny 😂**${other_commands}`;
        const perk = `**✨ Public ✨ **${perk_commands}`;

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
          msg.react('⬅️').then( r => {
            msg.react('⏺')
            msg.react('➡️')

            function stopAll() {
              stop.stop()
              forwards.stop()
              backwards.stop()
              msg.reactions.removeAll()
              return;
            }

            setTimeout(() => {
              embed2.setDescription('⛔ Help Module Closed')
              msg.edit(embed2)
              stopAll()
            }, 100000);
        
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id
            const stopFilter = (reaction, user) => reaction.emoji.name === '⏺' && user.id === message.author.id
        
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
              embed2.setDescription('⛔ Help Module Closed')
              r.users.remove(r.users.cache.filter(u => u === message.author).first())
              msg.edit(embed2)
              stopAll()
            })
          })
        })
    }
}