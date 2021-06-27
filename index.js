const Discord = require("discord.js");
const { default_prefix } = require("./config.json");
const {
  Client,
  Collection,
  MessageEmbed,
  MessageAttachment
} = require(`discord.js`);
//const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
const client = new Client({
  disableMentions: ``,
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
const fetch = require("node-fetch");
const handler = require("./handlers/commands.js");
const fs = require("fs");
const config = require("./config.json");
const { Snake } = require("weky");
const db = require("quick.db");
const { token } = require("./config.json");
client.commands = new Discord.Collection();

const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
handler(client);

fs.readdir("./events", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    //client.commands.set(command.name, command);
    delete require.cache[require.resolve(`./events/${file}`)];

    //////////////////////////

    /////////////////////////////// const statuses = [

    const DBL = require("dblapi.js");
    const dbl = new DBL(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MjE1Njc3NTcxNjk0NTk4MyIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI0MTg5NDYxfQ.Tv4XYc8Mo9GdUcK1WqaBQ7JJJkByuX_fV-t6rtUsc-s",
      client
    );

    setInterval(() => {
      fetch("https://mighty-nickel-spinosaurus.glitch.me").then(
        console.log("hosted")
      );
    }, 6000);

    // Optional events

    client.on("ready", () => {
      setInterval(() => {
        const statuses = [
          `Zhelp | www.zooyebot.xyz`,

          `User${client.guilds.cache.reduce(
            (a, g) => a + g.memberCount,
            0
          )} Guldis ${client.guilds.cache.size} `
        ];

        const status = statuses[Math.floor(Math.random() * statuses.length)];
        console.log(
          `${client.user.username} ready! ,Users ${client.guilds.cache.reduce(
            (a, g) => a + g.memberCount,
            0
          )}, Guilds ${client.guilds.cache.size}`
        );
        client.user.setActivity(
          `Zhelp ,Users ${client.guilds.cache.reduce(
            (a, g) => a + g.memberCount,
            0
          )}, Guilds ${client.guilds.cache.size}`
        );
        client.user.setActivity(status, { type: "LISTENING" });
      }, 5000);
    });

    //DO NOT TOUCH
    client.on(`warn`, info => console.log(info));
    //DO NOT TOUCH
    client.on(`error`, console.error);
    //DO NOT TOUCH
    //FOLDERS:
    //Admin custommsg data FUN General Music NSFW others

    ////////////////

    /////
  });
  client.on("message", msg => {
    if (msg.content === "?vote") {
      let embed = new Discord.MessageEmbed()
        .setTitle("`Zooye in top.gg`")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor("#FFFF33")
        .setFooter("Thank you for vote")
        .setThumbnail(
          "https://media.discordapp.net/attachments/763285123964731422/858568417559445514/vote.png?width=650&height=650"
        )
        .setImage("")
        .setDescription(
          " `Vote Link` https://top.gg/bot/762156775716945983/vote"
        );
      msg.channel.send(embed);
    }
    //);
  });

  //////////
});
/*
  client.on("message", async message => {
    const msg = message;
  
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (message.content === "+mm") {
      const slotemoji = ":money_mouth:";
      const customemoji = "<a:" + config.emojiname + ":" + config.emojiid + ">";
      if (config.haveEmoji === "1") slotemoji = customemoji;

      let items = ["💵", "💍", "💯"];

      let $ = items[Math.floor(items.length * Math.random())];
      let $$ = items[Math.floor(items.length * Math.random())];
      let $$$ = items[Math.floor(items.length * Math.random())];



      const play = new Discord.MessageEmbed()
        .setTitle("Slot Machine")
        .setDescription(
          "• " + slotemoji + "  " + slotemoji + "  " + slotemoji + " •"
        )
        .setColor("RANDOM")
        .setFooter("are you lucky bitch?");

      const $1 = new Discord.MessageEmbed()
        .setTitle("Slot Machine")
        .setDescription("• " + $ + "  " + slotemoji + "  " + slotemoji + " •")
        .setColor("RANDOM")
        .setFooter("are you lucky bitch?");

      const $2 = new Discord.MessageEmbed()
        .setTitle("Slot Machine")
        .setDescription("• " + $ + "  " + $$ + "  " + slotemoji + " •")
        .setColor("RANDOM")
        .setFooter("are you lucky bitch?");

      const $3 = new Discord.MessageEmbed()
        .setTitle("Slot Machine")
        .setDescription("• " + $ + "  " + $$ + "  " + $$$ + " •")
        .setColor("RANDOM")
        .setFooter("are you lucky bitch?");


      spinner = await message.channel.send(play);
      setTimeout(() => {
        spinner.edit($1);
      }, 600);
      setTimeout(() => {
        spinner.edit($2);
      }, 1200);
      setTimeout(() => {
        spinner.edit($3);
      }, 1800);

      // You can add/remove user balance in respective result (if using some currency system)

      if ($$ !== $ && $$ !== $$$) {
        setTimeout(() => {
          msg.channel.send("You LOST!`");
        }, 2000);
        // })
      } else if ($ === $$ && $ === $$$) {
        setTimeout(() => {
          msg.channel.send("You WON!`");
        }, 2000);
        //  })
      } else {
        msg.channel.send("2 slots are equal...");
        //}
        //}
      }
      //  )
      //     })

      //});
    }
  });
*/
client.on("message", message => {
  if (message.content.startsWith("?info")) {
    let Dashboard =
      "https://discord.com/api/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot";
    let inline = true;
    message.channel.send({
      embed: new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.displayAvatarURL())

        .setColor("#FFB901")
        .setTitle("BOT INFO")
        .setDescription(
          `                                                                                                               
  
**<a:astersa:855360029565386792> | [__invite bot__](${Dashboard})**`
        )

        //  .addField(
        //  "My Ping",
        //   [`${Date.now() - message.createdTimestamp}` + "MS"],
        //  true
        //   )
        .setAuthor(" ", client.user.displayAvatarURL())
        .addField(
          "**Users**",
          ` ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} `,
          true
        )
        .addField("**servers**", `${client.guilds.cache.size}`, true)
        .addField("**channels**", ` ${client.channels.cache.size} `, true)
        //  .addField("My Name", ` ${client.user.tag} `, true)
        .addField("**My ID**", ` ${client.user.id} `, true)
      //  .addField("My Prefix", ` ${PREFIX} `, true)
      //  .addField("Bot Library", "Discord.js", inline)
    });
  }
});

//////
//;
client.on("message", message => {
  if (message.content.startsWith("?help")) {
    let help = new Discord.MessageEmbed()
      .setColor("#FFFF33")
      .setImage(
        "https://media.discordapp.net/attachments/763285123964731422/858555288919474196/image0.jpg"
      )
      // .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/787340979148947466/801140313132367872/PicsArt_01-19-10.54.56.png")
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL())
      .setFooter("Thanks for adding Zooye,").setDescription(`
**<a:slaw:855359878696140830> [Hello From Zooye](https://zooyebot.xyz/)**

**⚙️ __Moderator__**
🛡︙Zsetup - Zlock - Zunlock - Zclear
🛡︙Zkick - Zban - Zpoll  -Zidp
🛡︙Zgiveaway - Zmbed - setsug


**__<a:kass:855358949841436692>Economy & game__**
💰︙Zdaily - Zcash - Zsend - ZHourly  
🎮︙Zdice - Zhighlow - Zlottery 
🎮︙Zrl - Zcf - Zroulette - Zslots

**__<a:hyhy:855350026615783424> Funny__**
😂︙Zkiss - Zslap - Zhug - Zkill
😂︙Zjoke - Zmeme - Zrip - imdb

**__<:public:855359832697077760> Everyone__**
🤹‍♂️︙Zinvite - Zsupport - Zinfo - Zping
🤹‍♂️︙Zuptime - Zserver - Zavatar  - Zgif
🤹‍♂️︙Zquote - Zrank - Zinfo - Zrps - Zvote
🤹‍♂️︙Zinfo - Zuserinfo - ig - github

**<:add:855359850229530655> Zooye's Links**

 [Invite bot ](https://discord.com/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) | [Zooye's Server](https://discord.gg/7dnQrMKjQs) 🔗`);

    message.channel.send(help);
  }
});

//LEVEL

const { addexp } = require("./handlers/xp.js");

//LEVEL
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  return addexp(message);
});

client.snipes = new Map();
client.on("messageDelete", function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    //author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});

const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
  storage: "./handlers/giveaways.json",
  updateCountdownEvery: 10000,
  default: {
    botsCanWin: false,
    exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
    embedColor: "#FF0000",
    reaction: "🎉"
  }
  //  });

  //   });

  ///////////////////////////////////////////////
});
//});

client.login(token);
