const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "start",
  category: "fun",
  aliases: "giveaway",
  description: "Giveaway command",
  async execute(message, args, client) {
    if (!args[0]) return message.channel.send("Zstart <time> <nitro>");
    if (
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
      return message.channel.send(
        "You can only use m/h/s for the giveaway time"
      );
    const gift = args.slice(1).join(" ");
    if (!gift) return message.channel.send("❌ Zstart <time> <gift>");
    const giftembed = new MessageEmbed()
      .setTitle(`<a:dyari:855359167505104896> **${gift}**`)

      .setDescription(
        `<:pinklist:855352526063796265> React with <a:giveaway:855358998831300608> to enter`
      )

      .addField(`**<a:swranawa:855359043816128562>Time**`, `⏰${args[0]}`, true)

      .addField(
        `**<:add:855359850229530655> Hosted by**`,
        `${message.author}`,

        true
      )
      .setColor("#F0E68C");
    const g = await message.channel.send("🎉🎉GIVEAWAY🎉🎉", giftembed);
    g.react("🎁");
    setTimeout(() => {
      if (g.reactions.cache.get("🎁").count <= 1) {
        const cancel = new MessageEmbed().setDescription(
          `No one reacted so i canceled the giveaway`
        );
        return g.edit(cancel);
      }

      const won = g.reactions.cache
        .get("🎁")
        .users.cache.filter(not => !not.bot)
        .random();
      message.channel.send(`Crongats **${won}** , you won **${gift}**!`);
      won.send(
        `Crongats **${won}** you won **${gift}** in ${message.guild.name} server!`
      );
    }, ms(args[0]));
  }
};
