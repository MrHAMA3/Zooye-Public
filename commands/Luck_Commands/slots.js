const { MessageEmbed } = require("discord.js");
//const slots = ["🍇", "🍉", "🍌" ];
const formatNumber = require("../../functions/regex");
const DB = require("djs-economy");
module.exports = {
  name: "slots",
  description: "slots command",
  aliases: ["sl"],
  cooldown: 3,
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

    if (message.deletable) message.delete();
    const slots = ["🍇", "🍉", "🍌", "🍒", "🍓"];
    // let slots = ["🧡", "💙", "💚"];
    let result1 = Math.floor(Math.random() * slots.length);

    let result2 = Math.floor(Math.random() * slots.length);
    let result3 = Math.floor(Math.random() * slots.length);
    let result4 = Math.floor(Math.random() * slots.length);
    let result5 = Math.floor(Math.random() * slots.length);
    let icon = message.author.displayAvatarURL();
    const gamble = args[0];

    if (!gamble) {
      return message.channel
        .send(`You Need To Place A Bet <@${message.author.id}>`)
        .then(m => m.delete({ timeout: 1000000 }));
    }
    if (!parseInt(gamble)) {
      return message.channel
        .send(`Your Bet Needs To Be A Number <@${message.author.id}>`)
        .then(m => m.delete({ timeout: 7000 }));
    }

    const bet = Math.abs(gamble);

    const win = bet * 3;

    DB.SubCash(message.author.id, bet);
    const check = await DB.GetCash(message.author.id);

    if (check.cash <= bet) {
      return message.channel
        .send(`You Dont Have That Much Money To Bet <@${message.author.id}>`)
        .then(m => m.delete({ timeout: 7000 }));
    }

    if (result1 === result2 && result1 === result3) {
      const embed = new MessageEmbed()
        .setThumbnail(icon)
        //.setTitle("💚")
        .setTitle(` ${user.user.username} `)
        .setDescription(
          `<a:Slrandom:857986182159925249>**|**${slots[result1]} **|** ${
            slots[result2]
          } **|** ${slots[result3]}**|**\n\n✅You Won: $${formatNumber(
            win
          )}\n\n<:para2:855359027839369267>You Have: $${formatNumber(
            check.cash + win
          )}`
        )
        .setColor("#00FF7F");
      DB.AddCash(message.author.id, win);
      return message.channel.send(embed);
    } else {
      const embed2 = new MessageEmbed()
        .setThumbnail(icon)
        .setTitle(` ${user.user.username} `)
        .setDescription(
          `<a:Slrandom:857986182159925249>**|**${slots[result1]} **|** ${
            slots[result2]
          } **|** ${slots[result3]}**|**\n\n❌Your Lost: $${formatNumber(
            bet
          )}\n\n<:para2:855359027839369267>You Have: $${formatNumber(
            check.cash
          )}`
        )
        .setColor("#00FF7F");
      return message.channel.send(embed2);
    }
  }
};
