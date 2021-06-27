const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: `rep`,
  description: `Gives you the rep of the user`,
  aliases: ["latency"],
  usage: "rip <user>",
  async execute(message, args, client) {
    const Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    const Embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle("Rest In Peace")
      .setImage(
        encodeURI(
          `https://api.devs-hub.xyz/rip?image=${Member.user.displayAvatarURL({
            format: "png"
          })}`
        )
      )
      .setTimestamp();

    return message.channel.send(Embed);
  }
};
