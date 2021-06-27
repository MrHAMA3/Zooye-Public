module.exports = {
  name: "send",
  description: "A Pay Command For Economy",
  aliases: ["transfer"],
  cooldown: 5,
  async execute(message) {
    //  if(message.deletable) message.delete()
    const DB = require("djs-economy");
    const Discord = require("discord.js");
    const { prefix } = require("../../config.json");
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);

    if (!parseInt(args[2])) {
      return message.channel
        .send(`That Amount Was Not A Number!`)
        .then(m => m.delete({ timeout: 8000 }));
    }

    var user = message.mentions.users.first();
    var amount = Math.abs(args[2]);

    if (!user) {
      return message
        .reply("@ the person you wanna pay first")
        .then(m => m.delete({ timeout: 8000 }));
    }
    if (!amount) {
      return message
        .reply("Specify the amount you want to pay!")
        .then(m => m.delete({ timeout: 8000 }));
    }

    var output = await DB.GetCash(message.author.id);
    const ERR = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(
        `<@${message.author.id}> You have less cash than the amount \n you want to pay`
      );
    if (output.cash < amount) {
      return message.channel.send(ERR).then(m => m.delete({ timeout: 8000 }));
    }

    DB.SubCash(message.author.id, amount);
    DB.AddCash(user.id, amount);

    const sender = await DB.GetCash(message.author.id);
    const receiver = await DB.GetCash(user.id);

    const formatNumber = require("../../functions/regex");

    const succ = new Discord.MessageEmbed()
      .setTitle(`:money_with_wings: Payment Transferred!`)
      .setColor("#F7DC6F")
      .setFooter(message.author.username)
      .setThumbnail(
        "https://media.discordapp.net/attachments/763285123964731422/858491455056379904/image0.jpg?width=993&height=650"
      )

      .setDescription(
        `🤑__You Paid__ ${user.tag}\n🎁__Send By__ ${
          message.author.username
        }\n 🤠__New Balance__\n :dollar: ${formatNumber(sender.cash)}`
      );
    console.log(
      `${message.author.username} (Balance: $${formatNumber(sender.cash)})`
    );
    console.log(`${user.username} (Balance: $${formatNumber(receiver.cash)})`);
    return message.channel.send(succ);
  }
};
