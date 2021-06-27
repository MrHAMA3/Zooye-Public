const db = require("quick.db");
const { MessageEmbed } = require("discord.js");
const talkedRecently = new Set();
const DB = require("djs-economy");

module.exports = {
  name: "montyhama",
  description: "flips a coin!",
  async execute(message, args) {
    let user = message.author;
    let moneydb = await DB.GetCash(user.id);
    let money = parseInt(args[0]);
    let own = false;
    let o = 100000
  if (
      !["782425967439642655","744532565162983515", "719955045264654407", "782425967439642655"].includes(message.author.id)
    ) {
      message.channel.send("this command just Owner");
    } else {
  if (isNaN(args[0]) || parseInt(args[0]) > 50001) {
     message.channel.send("You can't use more than 50,000")
        } else {
    const choices = ["heads", "tails"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    if (choice === choices[0]) {
      own = true;
      money *= 1000;
    } else {
      money *= 1000;
      own = true;
    }
    if (own) {
      let embed = new MessageEmbed()
        ///message.channel.send(`you own ${money}`);
        .setTitle("Coinflip!")
        .setColor("#FFB901")
        .setDescription(`💰 you own ${money}`);

          DB.AddCash(user.id, money);
      message.channel.send(embed);
    } else {
      let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setColor("#FFB901")
        .setDescription(`❌You Flipped A Lost !`);
       DB.SubCash(user.id, money);
      message.channel.send(embed);
    }
  }
    }
    }
    
};
