const { Client, Message, MessageEmbed } = require("discord.js");
let db = require("quick.db");

module.exports = {
  name: "setup",
  aliases: ["musicsetup"],
  cooldown: 10,
  usage: "setup",
  description: "Creates an unique Music Setup for Requesting Songs!",
  memberpermissions: ["ADMINISTRATOR"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  async execute(message, args, client) {
    // code here
    message.guild.channels
      .create("Zooye ", {
        type: "category",
        permissionOverwrites: [
          {
            id: message.guild.id,
            allow: ["VIEW_CHANNEL"]
          }
        ]
      })
      .then(channel1 => {
        //set the maximumbitrate limit
        let maxbitrate = 96000;
        //get the boosts amount
        let boosts = message.guild.premiumSubscriptionCount;
        if (boosts >= 2) maxbitrate = 128000;
        if (boosts >= 15) maxbitrate = 256000;
        if (boosts >= 30) maxbitrate = 384000;
        message.guild.channels
          .create(`🎧｜Zooye Music`, {
            type: "voice", //voice Channel
            bitrate: maxbitrate, //set the bitrate to the maximum possible
            userLimit: 30, //set the limit for voice users
            parent: channel1.id, //ADMINISTRATOR
            permissionOverwrites: [
              {
                id: message.guild.id,
                allow: ["VIEW_CHANNEL", "CONNECT"]
              }
            ]
          })
          .then(channel2 => {
            message.guild.channels
              .create(`🌟｜Zooye bot`, {
                type: "text", // text channel
                rateLimitPerUser: 6, //set chat delay
                topic: `To request a Track, simply Type the **SONG NAME** into the Channel or the **URL** and the Bot will play it! Make sure that you are in the **right** Voice Channel (🎧｜JUGNU Music)!`,
                parent: channel1.id,
                permissionOverwrites: [
                  {
                    id: message.guild.id,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ADD_REACTIONS"]
                  },
                  {
                    //giving the Bot himself permissions
                    id: client.user.id,
                    allow: [
                      "MANAGE_MESSAGES",
                      "MANAGE_CHANNELS",
                      "ADD_REACTIONS",
                      "SEND_MESSAGES",
                      "MANAGE_ROLES"
                    ]
                  }
                ]
              })
              .then(channel3 => {
                message.reply(`Setting up in <#${channel3.id}>`);
                let pehla = new MessageEmbed();
                // .setColor("#FFB901")
                // .setThumbnail(client.user.displayAvatarURL())
                //  .setAuthor(message.author.username)
                //  .setTitle("Zooye Music | Zooye Games")
                //    .setDescription(
                //      `Enter the song name or URL to play a song\n\n For Example ${db.prefix}play \`Rockstar baby song\``
                //    )
                //     .setFooter("Zooye");

                let dusra = new MessageEmbed()
                  .setColor("#FFB901")
                  .setThumbnail(client.user.displayAvatarURL())
                  .setAuthor(message.author.username)
                  .setTitle("🌟 Zooye - Best  Enconomy Bot And Gaming")
                  .setDescription(
                    `Join a voice channel and enter a song name or url to play.\n[Invite Zooye](https://discord.com/api/oauth2/authorize?client_id=762156775716945983&permissions=8&scope=bot) • [Join Server](https://discord.gg/XrPH6tHuPv) `
                  )
                  .setImage(
                    "https://media.discordapp.net/attachments/766738815880134678/857402303011225630/image0.png"
                  )
                  .setFooter("✨Zooye-bot");

                //send a temp message
                channel3
                  .send

                  // new MessageEmbed()
                  // .setColor("#FFB901")
                  //  .setDescription("Setting Up..")
                  ()
                  .then(msg => {
                    //edit the message again
                    msg.edit(pehla);
                    //save it in the database
                    // client.setups.set(message.guild.id, msg.id, "message_queue_info");

                 
                  });

                //send a temp message
                channel3
                  .send(
                    new MessageEmbed()
                      .setColor("#FFB901")
                      .setDescription("Setting Up..")
                  )
                  .then(msg => {
                    //edit the message again
                    msg.edit(dusra);

                    //save it in the database
                    // client.setups.set(message.guild.id, msg.id, "message_queue_info");

                    // // send a reaction message
                    // channel3.send(new MessageEmbed().setColor(config.colors.yes).setDescription("Setting Up..")).then( async msg => {
                    //     msg.edit(dusra)
                    //     //react with all reactions
                    //     await msg.react("⏭") // skip song
                    //     await msg.react("⏹") // stop song
                    //     await msg.react("🔉") // down volume
                    //     await msg.react("🔊") // up volume
                    //     await msg.react("⬅️") // forward 10s
                    //     await msg.react("➡️") // backward 10s

                    // })
                  });
              });
          });
      });
  }
};
