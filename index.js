const Discord = require("discord.js");
const { default_prefix } = require("./config.json");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hama:mrhama@zooye.nbysk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log(chalk.green("connected t DB"));
  })
  .catch(err => {
    console.log(chalk.red(err));
  });


const CurrencySystem = require("currency-system");
const cs = new CurrencySystem();
const chalk = require("chalk");

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

    
    
        client.on("ready", () => {
      setInterval(() => {
        client.user.setActivity(`Zhelp | ${client.guilds.cache.size} servers!  `);
      }, 1000);

      //DO NOT TOUCH
      //   client.on(`warn`, info => console.log(info));
      //DO NOT TOUCH
      //   client.on(`error`, console.error);
      //DO NOT TOUCH
      //FOLDERS:
      //Admin custommsg data FUN General Music NSFW others

 //     const dbOptions = {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
 //   autoIndex: false,
//    poolSize: 5,
 //   connectTimeoutMS: 10000,
 //  family: 4,
//  };
//  const chalk = require(`chalk`);
//  const { connect } = require("mongoose");
//  connect(config.mongo, dbOptions).then(() => {
   console.log(
    //  chalk.cyan("[Information] ") + chalk.blue(`Connected to Mongodb`)
   );
 });
  

      /////
  });
    //DO NOT TOUCH
    client.on(`warn`, info => console.log(info));
    //DO NOT TOUCH
    client.on(`error`, console.error);
    //DO NOT TOUCH
    //FOLDERS:
    //Admin custommsg data FUN General Music NSFW others

    ////////////////
  
//  });
});


//LEVEL

client.on("message", message => {
  if (message.content.startsWith("1info")) {
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

client.on("message", msg => {
  if (msg.content === "1vote") {
    let embed = new Discord.MessageEmbed()
      .setTitle("`Zooye in top.gg`")

      .setColor("#FFFF33")

      .setFooter("Thank you for vote")
      .setThumbnail(
        "https://media.discordapp.net/attachments/763285123964731422/858568417559445514/vote.png?width=650&height=650"
      )
      .setImage(
        "https://media.discordapp.net/attachments/763285123964731422/859985865244934164/image0.png"
      )
      .setDescription(
        " `Vote Link` https://top.gg/bot/762156775716945983/vote"
      );

    msg.channel.send(embed);
  }
  //);
});

 client.on("message", msg => {
    if (msg.content === "1invite") {
      let embed = new Discord.MessageEmbed()
        .setTitle("`Zooye Invite your server`")
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor("#FFFF33")

        .setFooter("Thank you for invited")
        .setThumbnail(
          "https://media.discordapp.net/attachments/849448966444810273/859987803683946496/image0.png"
        )
        .setImage(
          "https://media.discordapp.net/attachments/763285123964731422/859985861117345802/image0.png"
        )
        .setDescription(
          " `Zooye Link` https://discord.com/api/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot"
        );
      msg.channel.send(embed);
    }
    //);
 // });
  //////////
});

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

///0;
/////////////////////////////
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
});

 

// }

//00 }

///////////////////////////////////////////////

client.login(token);
