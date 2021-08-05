 const Discord = require('discord.js')
const db = require("../models/db.js")

module.exports = {
    name: "daily",
    description: "Daily Crate",
    aliases: ["d"],
    //cooldown: 86400,
    async execute(message,args,clinet) {
      
        const random = Math.floor(Math.random()* 7000)

const user = db.findOne({
  Username:message.author.username,
  User:message.author.id,
 // Guild:message.guild.id,
 // Guildname:message.guild.name
},(err,coins) => {
  if(err) console.log(err)
  
  if(!coins){
     message.channel.send("**Created DataBase Please Try Again**")
const mr = db.create({
          Username: message.author.username,
          User:message.author.id,
          Guild:message.guild.id,
          Guildname:message.guild.name,
          Coins: 100
})
}
 else{
   coins.Coins = coins.Coins + random
  coins.save()
  

      const formatNumber = require('../../functions/regex')
      //.setColor('#cf13f0')
   //.setDescription(`**${user.user.username}**\n<:Para:866091625922035762> **$${(formatNumber(random))}** was added to your balance`)
   message.channel.send(`** <:Para:866091625922035762> | ${message.author.username}** \n was added to your balance **<:Para:866091625922035762> __${random}__**`)
   console.log(
    `${message.author.username} (Balance: $${formatNumber(coins.Coins)})`
  );
 }

    }
  
  
)


}
  }
      
