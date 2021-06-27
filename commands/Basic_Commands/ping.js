const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  name: `ping`,
  description: `Gives you the ping of the Bot`,
  aliases: ["latency"],
  cooldown: 3,
  edesc: "Type this command to see how fast the Bot can response to your messages / commands inputs!",
  execute(message, args, client) {
      let moneyEmbed = new Discord.MessageEmbed()
     // message.channel.send({
       // embed: new MessageEmbed()
        .setAuthor(`${message.author.tag}`,message.author.avatarURL({ dynamic: true}))
  .setColor('RANDOM')
.setTitle("PING:")
.setDescription("🟢 `" + client.ws.ping + "ms`")
//.setFooter('NINETY9 BOT', 'https://media.discordapp.net/attachments/846993280487129120/847024492433899550/image0.png')
     
      
       message.channel.send(moneyEmbed);
              
  },
 };
      
      //});
  //  message.react("a:12:762717753877856285").catch(console.error)
//}
 // }//