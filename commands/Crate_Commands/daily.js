module.exports = {
  name: "daily",
  description: "Daily Crate",
  aliases: ["d"],
  cooldown: 86400,
  async execute(message) {
    //     if(message.deletable) message.delete()
    const Discord = require("discord.js");
    const DB = require("djs-economy");
    const first = await DB.GetCash(message.author.id);
    console.log(`${message.author.username} First Timer Check: ${first.cash}`);
    const cratesicon = `https://media.discordapp.net/attachments/763285123964731422/858491455056379904/image0.jpg?width=993&height=650`;
    await DB.AddCash(message.author.id, 70000);
    var output = await DB.GetCash(message.author.id);
    const formatNumber = require("../../functions/regex");
    const embed = new Discord.MessageEmbed()
      .setColor("#F7DC6F")
      .setThumbnail(cratesicon)
      .setTitle(`${message.author.username} `)
      .setDescription(
        `💵 **7000** was added to your balance\nYou Now Have $${formatNumber(
          output.cash
        )}`
      )
      .setAuthor(
        `Daily Crate Claimed`,
        "https://media.discordapp.net/attachments/763285123964731422/858524739479404544/image0.png?width=651&height=650"
      );
    console.log(
      `${message.author.username} (Balance: $${formatNumber(output.cash)})`
    );
    message.channel.send(embed);
  }
};
