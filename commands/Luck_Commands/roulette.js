const { MessageEmbed } = require('discord.js');
const DB = require('djs-economy');
const formatNumber = require("../../functions/regex");
const db = require("../models/db.js");

module.exports = {
    name: 'roulette',
    description: 'roulette game',
    aliases: ['rl'],
    cooldown: 5,
    async execute(message, args) {

     //   if(message.deletable) message.delete()

      let mrhama = db.findOne({
  Username:message.author.username,
  User:message.author.id
}, (err,rl) => {
  if(err) console.log(err)
  if(!rl){
    db.create({
      Username:message.author.username,
      User:message.author.id,
      Guild:message.guild.id,
      Guildname:message.guild.name,
      Coins:100
    })
  } else{
    
  
        if(!parseInt(args[0])){return message.channel.send(`**${message.author.username}**\n Your Bet Is Not A Number`).then(m => m.delete({ timeout: 8000 }));}
        const bet = Math.abs(args[0]);


        if(rl.Coins <= bet){return message.channel.send(`**${message.author.username}**\n You Dont Have That Much Money`).then(m => m.delete({ timeout: 8000 }));}

        DB.SubCash(message.author.id, bet)

        const colorss = ['🔴', '🔵', '🟢']
         //nst colorss = ['🔴', '🔵', '🟢', '🟠', '🟡']
        const botroll = colorss[Math.floor(Math.random() * colorss.length )]

        const embed = new MessageEmbed()
        .setDescription(`**${message.author.username}**\n👇Pick An Emoji Each One Has A Diffrent Multiplier\nYour Bet: $${bet.toLocaleString()}`)
      //  .setThumbnail(messa.user.displayAvatarURL())
        .setImage("https://images-ext-1.discordapp.net/external/AdEq7d1PIH_Pl67c_B0FrPRna8iTvkkfxnjtY6UJ1oo/https/media.discordapp.net/attachments/856275343831990283/863570591839289374/image0.png")
        .setColor('RANDOM');
        

        const redFilter = (reaction, user) => reaction.emoji.name === '🔴' && user.id === message.author.id;
        const blueFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;
        const greenFilter = (reaction, user) => reaction.emoji.name === '🟢' && user.id === message.author.id;
        //nst orangeFilter = (reaction, user) => reaction.emoji.name === '🟠' && user.id === message.author.id;
       //onst yellowFilter = (reaction, user) => reaction.emoji.name === '🟡' && user.id === message.author.id;

        message.channel.send({embed}).then(msg => {
            msg.react('🔴').then( r => {
              msg.react('🔵')
              msg.react('🟢')
             //sg.react('🟠')
             //sg.react('🟡')

        const red = msg.createReactionCollector(redFilter, {timer: 6000});
        const blue = msg.createReactionCollector(blueFilter, {timer: 6000});
        const green = msg.createReactionCollector(greenFilter, {timer: 6000});
       //onst orange = msg.createReactionCollector(orangeFilter, {timer: 6000});
       //onst yellow = msg.createReactionCollector(yellowFilter, {timer: 6000});

        let redbet = Math.round(bet * 1.5);
        let bluebet = Math.round(bet * 2);
        const greenbet = Math.round(bet * 2.5);
        const orangebet = Math.round(bet * 3);
        const yellowbet = Math.round(bet * 3.5);
        
        function stopAll() {
            msg.reactions.removeAll()
            red.stop()
            blue.stop()
            green.stop()
        //  orange.stop()
        //  yellow.stop()
            return;
        }


        red.on('collect', (r, u) => {
        if(botroll === "🔴") {
            embed.setDescription(`**${message.author.username}**\n ✅You Won 1.5x Your Bet:\nYou $${redbet}\nYou Now Have: $${formatNumber(rl.Coins - bet + redbet)}`)
            msg.edit(embed)
            rl.Coins = rl.Coins + redbet
            stopAll()
          rl.save()
        } else {
            embed.setDescription(`**${message.author.username}**\n ❌You Lost Your Bet!\n   You Color Was: ${botroll}\nYou Now Have: $${formatNumber(rl.Coins - bet)}`)
            msg.edit(embed)
            stopAll()
          rl.save()
        }})
        blue.on('collect', (r, u) => {
            if(botroll === "🔵") {
            embed.setDescription(`**${message.author.username}**\n ✅You Won 2x Your Bet:\nYou $${bluebet}\nYou Now Have: $${formatNumber(rl.Coins - bet + bluebet)}`)
            msg.edit(embed)
            rl.coins + bluebet
            stopAll()
           rl.save()
        } else {
            embed.setDescription(`**${message.author.username}**\n ❌You Lost Your Bet!\n   You Color Was: ${botroll}\nYou Now Have: $${formatNumber(rl.Coins - bet)}`)
            msg.edit(embed)
            stopAll()
            rl.save()
        }})
        green.on('collect', (r, u) => {
            if(botroll === "🟢") {
            embed.setDescription(`**${message.author.username}**\n ✅You Won 2.5x Your Bet:\nYou $${greenbet}\nYou Now Have: $${formatNumber(rl.Coins- bet + greenbet)}`)
            msg.edit(embed)
            rl.Coins = rl.Coins + greenbet
            stopAll()
              rl.save()
        } else {
            embed.setDescription(`**${message.author.username}**\n ❌You Lost Your Bet!\n   You Color Was: ${botroll}\nYou Now Have: $${formatNumber(rl.Coins - bet)}`)
            msg.edit(embed)
            stopAll()
            rl.save()
        }})
      ///range.on('collect', (r, u) => {
            //(botroll === "🟠") {
            //bed.setDescription(`<@${message.author.id}>\n ✅You Won 3x Your Bet:\nYou $${orangebet}\nYou Now Have: $${formatNumber(check.cash - bet + orangebet)}`)
          //msg.edit(embed)
          ///B.AddCash(message.author.id, orangebet)
           //topAll()
      /// else {
          ///mbed.setDescription(`<@${message.author.id}>\n ❌You Lost Your Bet!\n   You Color Was: ${botroll}\nYou Now Have: $${formatNumber(check.cash - bet)}`)
        ////msg.edit(embed)
       ///  stopAll()
    //  }})
       //ellow.on('collect', (r, u) => {
        //  if(botroll === "🟡") {
        /// embed.setDescription(`<@${message.author.id}>\n ✅You Won 3.5x Your Bet: $${yellowbet}\nYou Now Have: $${formatNumber(check.cash - bet + yellowbet)}`)
        //  msg.edit(embed)
        //  DB.AddCash(message.author.id, yellowbet)
       //   stopAll()
      //} else {
      ///   embed.setDescription(`<@${message.author.id}>\n ❌You Lost Your Bet!\n    Color Was: ${botroll}\nYou Now Have: $${formatNumber(check.cash - bet)}`)
     ///    msg.edit(embed)
     //     stopAll()
   ///  }})
              
            })
})}
        })

      }
}