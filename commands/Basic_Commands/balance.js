const DB = require("djs-economy");
const Discord = require("discord.js");

module.exports = {
  name: "balance",
  description: "Fetch's A Player Balance",
  aliases: ["cash", "money"],
  cooldown: 5,
  async execute(message) {
    //  if (message.deletable) message.delete();

    const userArray = message.content.split(" ");
    const userArgs = userArray.slice(1);
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(userArgs[0]) ||
      message.guild.members.cache.find(
        x =>
          x.user.username.toLowerCase() === userArgs.slice(0).join(" ") ||
          x.user.username === userArgs[0]
      ) ||
      message.member;

    const first = await DB.GetCash(member.id);
    console.log(`${member.user.username} First Timer Check: ${first.cash}`);

    const check = await DB.GetCash(member.id);
    const balance = `${check.cash.toLocaleString()}`;

    const embed = new Discord.MessageEmbed()
      .setColor("#F7DC6F")
      .setTitle("💰Balance Info!")
      //  .setFooter("**💰Balance Info!**")
      .setAuthor(member.user.username)
      //  .setThumbnail(member.user.displayAvatarURL())
      .setThumbnail(
        "https://media.discordapp.net/attachments/763285123964731422/858491455056379904/image0.jpg?width=993&height=650"
      )
      .setDescription(
        `\n🤑Balance Info!\n👇you Now Cash\n:dollar: __${balance}__`
      );
    message.channel.send(embed);
    return;
  }
};
