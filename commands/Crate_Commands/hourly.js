module.exports = {
  name: "hourly",
  description: "Hourly Crate",
  aliases: [],
  cooldown: 3600,
  async execute(message) {
    //  if(message.deletable) message.delete()
    const Discord = require("discord.js");
    const DB = require("djs-economy");
    const first = await DB.GetCash(message.author.id);
    console.log(`${message.author.username} First Timer Check: ${first.cash}`);
    const cratesicon = `https://cdn.discordapp.com/attachments/763285123964731422/858491455056379904/image0.jpg`;
    await DB.AddCash(message.author.id, 4000);
    var output = await DB.GetCash(message.author.id);
    const formatNumber = require("../../functions/regex");
    const embed = new Discord.MessageEmbed()
      .setColor("#F7DC6F")
      .setThumbnail(cratesicon)
      .setTitle(`${message.author.username} `)
      .setDescription(
        `💵 **4,000** was added to your balance\nYou Now Have $${formatNumber(
          output.cash
        )}`
      )
      .setAuthor(
        `Hourly Crate Claimed`,
        "https://media.discordapp.net/attachments/763285123964731422/858524739479404544/image0.png?width=651&height=650"
      );
    console.log(
      `${message.author.username} (Balance: $${formatNumber(output.cash)})`
    );
    return message.channel.send(embed);
  }
};
