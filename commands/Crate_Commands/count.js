const Discord = require("discord.js")

module.exports = {
    name: "count",
    category: "info",
    description: "shows server information",
    async execute(message, args)  {

        let Embed = new Discord.MessageEmbed()
            .setColor(0xdfa914)
            .setTitle("Member Count:")
            .setColor(0x5126c7)
            .setDescription(`${message.guild.memberCount}`)
            .setFooter("Made by @FootlockerRU")
        message.channel.send(Embed);
    }
}