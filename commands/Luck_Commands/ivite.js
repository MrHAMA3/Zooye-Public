const { Client, Message, MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "get my invite link",
  useage: "invite",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  async execute(message, args, client) {
    let invite = new MessageEmbed()
      .setColor("#4169E")
      .setTitle(client.user.username)
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(message.author.username)
      .setDescription(`\`Click Below On Invite Link\``)
      .addField(
        "**__Add to Discord👇🏻__**",
        `
                >>>  [\`✅INVITE\`](https://discord.com/api/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot)
                `
      )
      .setFooter("Thank you");

    message.channel.send(invite);
  }
};
