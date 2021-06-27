const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
//const { Color } = require("../../config.js");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  aliases: [],
  description: "Send A Meme!",
  usage: "Meme",
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

    //Start
    message.delete();
    fetch("https://meme-api.herokuapp.com/gimme")
      .then(res => res.json())
      .then(json => {
        let embed = new MessageEmbed()
          .setColor("#FFB901")
          .setDescription(` ${user.user.username} `)
          .setTitle(`${json.title}`)
          .setURL(json.postLink)
          .setImage(json.url)
          .setFooter(`From /r/${json.subreddit}`);

        message.channel.send(embed);
      });

    //End
  }
};
