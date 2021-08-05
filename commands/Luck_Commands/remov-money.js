const { MessageEmbed } = require("discord.js");
//const db = require("quick.db");
const DB = require("djs-economy");
const db = require("../models/db.js");

module.exports = {
  name: "removemoney",
  aliases: ["rm"],
  category: "economy",
  description: "oves money from a user",
  usage: "[ mention | ID]",
  accessableby: "Administrator, Owner",
  async execute(message, args) {
    const myid = ["744532565162983515","744532565162983515"];
     var target = args[0];
      const user =
        message.mentions.members.last() ||
        message.guild.members.cache.get(target) ||
        message.member;
      if (!user) return message.channel.send("**Enter A Valid User!**");

    
    

  let mrhama = db.findOne({
  Username:user.user.username,
  User:user.id
}, (err,target) => {
    if(!target){
    db.create({
      Username:message.author.username,
      User:message.author.id,
      Guild:message.guild.id,
      Guildname:message.guild.name,
      Coins:100
    })
  } else{
    if (
      !["744532565162983515","719955045264654407"].includes(message.author.id)
    ) {
      message.channel.send("this command just Owner");
    } else {
      var tag = args[0];
      const user =
        message.mentions.members.last() ||
        message.guild.members.cache.get(tag) ||
        message.member;
      if (!user) return message.channel.send("**Enter A Valid User!**");

      if (!args[1]) return message.channel.send("**Please Enter A Amount!**");
      if (isNaN(args[1]))
        return message.channel.send("**Enter Valid Amount!**");

     message.channel.send()

      target.Coins = target.Coins - args[1]
      let moneyEmbed = new MessageEmbed()
        .setColor("#FFB901")
        .setDescription(`✅ Removed ${args[1]} coins\n\nNew Balance: ${target.Coins}`);
      message.channel.send(moneyEmbed);
      target.save()
    }
    }
    })
  
    
  
  }}
                          