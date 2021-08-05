const { MessageEmbed } = require("discord.js");
const talkedRecently = new Set();
const DB = require("djs-economy");
const db = require("../models/db.js")

module.exports = {
  name: "coinflip",
  aliases: "cf",
  description: "flips a coin!",
 // cooldown: 1,

   execute(message, args) {
    
      let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;
    let moneydb = DB.GetCash(message.author.id);
    var money = 0;
    let user2 = message.author;
    let time = 10000;
    let own = false;
    let random = [0, 1];
    const arg1 = args[0];
    const heads = ":moneybag:";
    const tails = "❌";
    let max = 50000
    let all = false;
    const rand = random[Math.floor(Math.random() * random.length)];

    let text2 = new MessageEmbed()
      // .setTitle()
      .setColor("#FF5733")
      .setDescription(
        `**${user.user.username} **CoinFlip ** ${money} <a:emoji_12:854073741520666644> ** Choice  `
      );

    //  let rand = await random(0,1);

    
    const MrHama = db.findOne({
  Username: message.author.username,
 User: message.author.id,
}, (err, cf) => {
  if (err) console.log(err)
  if (!cf) {
    db.create({
      Username: message.author.username,
      User: message.author.id,
      Guild: message.guild.id,
      Guildname:message.guild.name,
      Coins: 100
    })
  } else {
    
    
    
  let moneymore = new MessageEmbed()
      .setColor("#FFB901")
      .setTitle(` ${message.author.username} `)
      .setDescription(`❌** You are betting more than you have**`);
    // .setDescription( ` ${user.user.username} `);
  //  if (money > cf.Coins) return message.channel.send(moneymore);


    
    if(args[0] === "all"){
      all = true
    }else if(parseInt(args[0])){
      money = parseInt(args[0])
    } 
    
    if(all && cf.Coins > 50000  ){
      money = 50000
    }
      if(all && cf.Coins < max)
      money = moneydb;
      if(all && cf.Coins == 0) return message.channel.send("**You Dont Have Money**")
    
    if(!all&& isNaN(args[0]) || parseInt(args[0]) > 50000) return message.channel.send("You Can't More Than 50,000")

    if(cf.Coins===0&&!all){
      message.channel.send("**You Dont Have Money**")
      return;
    }
    
    
    
      let choice = "h";
      if (arg1 == "heads" || arg1 == "h" || arg1 == "head") choice = "h";
      else if (arg1 == "tails" || arg1 == "t" || arg1 == "tail") choice = "t";

      if (rand == 0 && choice == "t") own = true;
      else if (rand == 1 && choice == "h") {
        own = true;
        if(all){
           all = money
        }
      } // else if (rand === 1 && choice == "ha") {
      //      own = false;
      //    }
//const text = new MessageEmbed()
      // .setTitle()
 //     .setColor("#FF5733")
 //     .setDescription(
const text =
        `**${user.user.username} **CoinFlip ** ${money} <a:emoji_12:854073741520666644>** Choice Own Or Lost `
      ;
  //  message.channel.send(text)
      if (own) {
         money *= 2
     
  let hama = args[0]

        // text2 = `**${user.user.username} **CoinFlip ** <:para1:855359124632240158> ** Choice**  `;
        message.channel.send(text).then(msg => {
          setTimeout(() => {
        //    let editem = new MessageEmbed()
              // .setTitle()
            //  .setColor("#0FF06F")
          //    .setFooter("coinflip")
         //     .setThumbnail(
         //       "https://media.discordapp.net/attachments/763285123964731422/862224195035463690/image1.png"
          //    )
              msg.edit(`**🟢 ${user.user.username}** \`\`\`YOU WIN...  \`\`\`Coin Flip Spent <:Para:866091625922035762> ${hama}\`\`\`      \`\`\` <:Para:866091625922035762> **__${money}__+** Amounting winning\n`);
          }, 3000);
        });

        cf.Coins = cf.Coins + money
        cf.save()
      } else {

      message.channel.send(text).then(msg => {
 
        setTimeout(() => {
    
                   let hama = args[0]

          msg.edit(`**🔴 ${user.user.username}** \`\`\`YOU LOST...  \`\`\` Coin Flip Spent **  <:Para:866091625922035762> ${money}**\`\`\`      \`\`\` The coin spins and you lost it all...Z!\n`);
          }, 3000);
 
           });

        cf.Coins = cf.Coins - money
        cf.save()

        // message.channel.send(embed);
      
    
      
    
  
    
        }
  
     
      }
      })
  
    
  }  
};
