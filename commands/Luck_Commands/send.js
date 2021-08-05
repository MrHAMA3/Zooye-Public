const db = require("../models/db.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "send",
  description: "A Pay Command For Economy",
  aliases: ["transfer"],
  usage: "[ mention | ID]",
  cooldown: 5,
  async execute(message, args, client) {
    //  if(message.deletable) message.delete()
    const DB = require("djs-economy");
    const Discord = require("discord.js");
   const money = parseInt(args[0])
    const { prefix } = require("../../config.json");


  let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) || message.member;
    
    var amount = Math.abs(args[1]);

    if(message.content.includes("1send")){
      let channel = client.channels.cache.get("863748443951595530")
      let mRHama = new MessageEmbed()
      .setColor("RANDOM")
      .addField("**Name**","__" + message.author.username + "__")
      .addField("**ID**","__" +message.author.id+ "__")
      .addField("**Message**","__" +message.content+ "__")
      .addField("**Amount**","__" +args[1]+ "__")
      .addField("**Target**","__" +user.user.username+ "__")
      .addField("**Target Id**","__" +user.id+ "__")
      .addField("**Guild Name**","__" +message.guild.name+ "__")
      .addField("**Guild Id**","__" +message.guild.id+ "__")
      .setTimestamp()
      .setThumbnail(message.author.avatarURL({ dynamic : true}))
      .setFooter()
      channel.send(`**Sender**:__${message.author.tag}__\n**Sender**:__${message.author.username}__\n**Sender Id**:__${message.author.id}__\n\n**Target**:__${user.user.username}__\n**Target**:__${user.user.tag}__\n**Target Id**:__${user.id}__`,{embed:mRHama})
    }
    

    if (!parseInt(args[1])) {
      return message.channel
        .send(`That Amount Was Not A Number!`)
        .then(m => m.delete({ timeout: 8000 }));
    }
  
    
  //  var user = message.mentions.users.first();
    
    if (!user) {
      return message
        .reply("@ the person you wanna pay first")
        .then(m => m.delete({ timeout: 8000 }));
    }
    if (!user) {
      return message
        .reply("Specify the amount you want to pay!")
        .then(m => m.delete({ timeout: 8000 }));
    }
    if(user === message.author.id){
      message.channel.send("")
    }
    

    
    const MrHama = db.findOne({
  Username: message.author.username,
  User: message.author.id,
}, (err, user1) => {
  if (err) console.log(err)
  if (!user1) {
    db.create({
      Username: message.author.username,
      User: message.author.id,
      Guild: message.guild.id,
      Guildname: message.guild.name,
      Coins: 100
    })
  } else {

  

    const ERR = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        `<@${message.author.id}> You have less cash than the amount \n you want to pay`
      );
    if (user1.Coins < amount) {
      return message.channel.send(ERR).then(m => m.delete({ timeout: 8000 }));
    }

    user1.Coins = user1.Coins - amount
    user1.save();
    
    db.findOne({
      User:user.id ,
      Username:user.user.username
    }, (err, tag) => {
      if(err) console.log(err)
    
      if(!tag){
        const mr = db.create({
          Username:user.user.username,
          User:user.id,
          Guild:message.guild.id,
          Guildname:message.guild.name,
          Coins: amount
          })
      }else{
        tag.Coins = tag.Coins + amount
        tag.save()
      console.log(`${user.username} (Balance: $${formatNumber(tag.Coins)})`);

    }
    })


    const formatNumber = require("../../functions/regex");

 //   const succ = new Discord.MessageEmbed()
    //  .setTitle(`✅ __Payment Transferred!__`)
//      .setColor("#1BD8FC")
      //  .setImage(
      //     "https://media.discordapp.net/attachments/763285123964731422/859981394424233994/image2.png"
      //   )
   //   .setFooter("Payment Transferred!")
   //   .setAuthor(user.username)
   //   .setThumbnail(
   //     "https://media.discordapp.net/attachments/763285123964731422/860798586874888242/image0.gif"
   //   )

 //   const succ = new Discord.MessageEmbed()
 //     .setTitle(`✅ __Payment Transferred!__`)
 //     .setColor("#1BD8FC")
      //  .setImage(
      //     "https://media.discordapp.net/attachments/763285123964731422/859981394424233994/image2.png"
      //   )
//      .setFooter("Payment Transferred!")
  //    .setAuthor(user.username)
//      .setThumbnail(
  ///      "https://media.discordapp.net/attachments/763285123964731422/860798586874888242/image0.gif"
//      )
  }
message.channel.send(
      `\n <:Para:866091625922035762> | **${
        // user.tag
        message.author.username
      }**\nSend  **<:Para:866091625922035762> __${amount}__** Zooye to **${user.user.username}**`
    );
 //   return message.channel.send(succ);
  }
                              

//    }
    
  )

}
  }
      