const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
//const ms = require("parse-ms");
const talkedRecently = new Set();
//const random = require('random-number-csprng');
const DB = require("djs-economy");

module.exports = {
  name: "cf",
  description: "flips a coin!",

  async execute(message, args) {
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

    // let user = message.author;
    let moneydb = await DB.GetCash(user.id);

    let money = parseInt(args[0]);
    // let money2 = args[0] *= 2;
    let own = false;
    let user2 = message.author;
    //  let member = db.fetch(`money_${user2.id}`);
    let random = [0, 1, 2];
    const arg1 = args[0];
    const heads = ":moneybag:";
    const tails = "❌";
    const rand = random[Math.floor(Math.random() * random.length)];
    const text = `**${user.user.username} **CoinFlip ** ${money} <a:emoji_12:854073741520666644>** Choice Own Or Lost `;
    let text2 = `**${user.user.username} **CoinFlip ** ${money} <a:emoji_12:854073741520666644> ** Choice  `;

    //  let rand = await random(0,1);
  
    if (talkedRecently.has(message.author.id)) {
      let timeEmbed = new MessageEmbed()
        .setTitle(` ${user.user.username} `)
        .setColor("#FFB901")
        .setDescription(`❌ You've command it again in 10s `);
    } else {
      let moneymore = new MessageEmbed()
        .setColor("#FFB901")
        .setTitle(` ${user.user.username} `)
        .setDescription(`❌** You are betting more than you have**`);
      // .setDescription( ` ${user.user.username} `);
      if (money > moneydb) return message.channel.send(moneymore);

      if (isNaN(args[0]) || parseInt(args[0]) > 50000) {
        message.channel.send("You can't use more than 50,000");
      } else {
        /*
    const choices = ["hama","heads", "tails"];
   const choice = choices[Math.floor(Math.random() * choices.length)];
  if (choice === choices[1]) {
      own = true;
      money *= 2;
    } else {
      own = false;
    }
    */
        let choice = "h";
        let hama = "monty";
        if (arg1 == "heads" || arg1 == "h" || arg1 == "head") choice = "h";
        else if (arg1 == "tails" || arg1 == "t" || arg1 == "tail") choice = "t";
        else if (arg1 == "hama" || arg1 == "ha" || arg1 == "ma") choice = "ha";

        if (rand == 0 && choice == "t") own = true;
        else if (rand == 1 && choice == "h") {
          own = true;
        } else if (rand === 1 && choice == "ha") {
          own = false;
        }

        if (own) {
          /*
      let embed = new MessageEmbed()
        ///message.channel.send(`you own ${money}`);
        .setTitle("Coinflip!")
        .setColor("#FFB901")
        .setDescription(`💰 you own ${money}`);
*/
          let hama = args[0] *= 2;
          text2 = `**${user.user.username} **CoinFlip ** <:para1:855359124632240158> ** Choice**  `;
          message.channel.send(text).then(msg => {
            setTimeout(() => {
              msg.edit(
                `${text2}\n\n**✅ You Own **<:para2:855359027839369267> ${hama}**`
              );
            }, 3000);
          });

          DB.AddCash(user.id, money);
        } else {
          /*
      let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setColor("#FFB901")
       .setDescription(`❌You Flipped A Lost !`);
       */
        hama = args[0];
          text2 = `**${user.user.username} **CoinFlip **  <:para1:855359124632240158> ** Choice**  `;
          message.channel.send(text).then(msg => {
            setTimeout(() => {
              msg.edit(
                `${text2}\n\n**❌ You Lost  **<:para2:855359027839369267> ${hama}**`
              );
            }, 3000);
          });
          DB.SubCash(user.id, money);
          // message.channel.send(embed);
        }
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 13000);
      }
    }
  }
};
