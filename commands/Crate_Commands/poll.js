const { MessageReaction } = require("discord.js");

module.exports = {

    name: 'poll',
    description: "This is poll command",
    execute(message,args,Discord) {
 
      var reaction_numbers = ["\u0030\u20E3","\u0031\u20E3","\u0032\u20E3","\u0033\u20E3","\u0034\u20E3","\u0035\u20E3", "\u0036\u20E3","\u0037\u20E3","\u0038\u20E3","\u0039\u20E3"]
          
          var i = message.content.indexOf(" ");
          console.log(i)
          if (i == undefined || i == -1 || i == null) {
            message.channel.send('This is not a valid command.');
            message.channel.send('To learn how to use the poll bot, do !help.')
            return;
          } else {
          var args2 = message.content.substring(i+1);
          var args3 = args2.split(";");
          
          }

            
    
          console.log(args3[0])
          console.log(args3.length)
          
            if (args3.length == 1) {
    
              const embed = {
                color:("RANDOM"),
                title: "**" + args3[0] + "**",
                //url: 'https://discord.js.org',
                author: {
                  name: 'Zooye',
                  icon_url: 'https://media.discordapp.net/attachments/763285123964731422/849133196195921960/image0.png?width=675&height=649',
                  url: 'https://discord.js.org',
                },
                description: '',
                thumbnail: {
                  //url: 'https://i.imgur.com/wSTFkRM.png',
                },
                // image: {
                //   url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                  text: 'Zooye.',
                  //icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
              };
                message.delete(); 
                //message.delete(5000).catch(console.error);
                message.channel.send({ embed }).then(MessageReaction => {
                  MessageReaction.react('👍');
                  MessageReaction.react('👎');
                  
                  
    
                });

    } else if (args3.length == 3) {
    
              const embed = {
                color: "#FFB901",
                title: args3[0],
                //url: 'https://discord.js.org',
                author: {
                  name: 'Zooye',
                  icon_url: 'https://media.discordapp.net/attachments/763285123964731422/849133196195921960/image0.png?width=675&height=649',
                  url: 'https://discord.js.org',
                },
                description: 'Multiple choice poll',
                thumbnail: {
                  //url: 'https://i.imgur.com/wSTFkRM.png',
                },
                fields: [
                  {
                    name: "Option 2:",
                  value: ":one: **" + args3[1] + "**",
                    inline: true,
                  },
                  {
                    name: "Option 2:",
                    value: ":two: **" + args3[2] + " **",
                    inline: true,
                  },
                ],
                // image: {
                //   url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                  text: 'Choose by reacting to the correct emoji below.',
                  //icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
              };
              
              message.delete(); 
                  message.channel.send({ embed }).then(MessageReaction => {
                    MessageReaction.react(reaction_numbers[1]);
                    MessageReaction.react(reaction_numbers[2]);

                  });
    
            } else if (args3.length  == 4) {

              const embed = {
                color: "#FFB901",
                title: args3[0],
                //url: 'https://discord.js.org',
                author: {
                  name: 'ZooyePoll',
                  icon_url: 'https://media.discordapp.net/attachments/763285123964731422/849133196195921960/image0.png?width=675&height=649',
                  url: 'https://discord.js.org',
                },
                description: 'Multiple choice poll',
                thumbnail: {
                  //url: 'https://i.imgur.com/wSTFkRM.png',
                },
                fields: [
                  {
                    name: "Option 2:",
                  value: ":one: **" + args3[1] + "**",
                    inline: false,
                  },
                  {
                    name: "Option 2:",
                    value: ":two: **" + args3[2] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 3:",
                    value: ":three: **" + args3[3] + " **",
                    inline: false,
                  },
                ],
                // image: {
                //   url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                  text: 'Zooye.',
                  //icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
              };
              
              message.delete(); 
                  message.channel.send({ embed }).then(MessageReaction => {
                    MessageReaction.react(reaction_numbers[1]);
                    MessageReaction.react(reaction_numbers[2]);
                    MessageReaction.react(reaction_numbers[3]);

                  });
    
            }else if (args3.length  == 5) {

              const embed = {
                color: "#FFB901",
                title: args3[0],
                //url: 'https://discord.js.org',
                author: {
                  name: 'Zooye',
                  icon_url: 'https://media.discordapp.net/attachments/763285123964731422/849133196195921960/image0.png?width=675&height=649',
                  url: 'https://discord.js.org',
                },
                description: 'Multiple choice poll',
                thumbnail: {
                  //url: 'https://i.imgur.com/wSTFkRM.png',
                },
                fields: [
                  {
                    name: "Option 2:",
                  value: ":one: **" + args3[1] + "**",
                    inline: false,
                  },
                  {
                    name: "Option 2:",
                    value: ":two: **" + args3[2] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 3:",
                    value: ":three: **" + args3[3] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 4:",
                    value: ":four: **" + args3[4] + " **",
                    inline: false,
                  },
                ],
                // image: {
                //   url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                  text: 'Zooye.',
                  //icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
              };
              
              message.delete(); 
                  message.channel.send({ embed }).then(MessageReaction => {
                    MessageReaction.react(reaction_numbers[1]);
                    MessageReaction.react(reaction_numbers[2]);
                    MessageReaction.react(reaction_numbers[3]);
                    MessageReaction.react(reaction_numbers[4]);

                  });
    
            }else if (args3.length  == 6) {

              const embed = {
                color: "#FFB901",
                title: args3[0],
                //url: 'https://discord.js.org',
                author: {
                  name: 'Zooye',
                  icon_url: 'https://media.discordapp.net/attachments/763285123964731422/849133196195921960/image0.png?width=675&height=649',
                  url: 'https://discord.js.org',
                },
                description: 'Multiple choice poll',
                thumbnail: {
                  //url: 'https://i.imgur.com/wSTFkRM.png',
                },
                fields: [
                  {
                    name: "Option 2:",
                  value: ":one: **" + args3[1] + "**",
                    inline: false,
                  },
                  {
                    name: "Option 2:",
                    value: ":two: **" + args3[2] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 3:",
                    value: ":three: **" + args3[3] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 4:",
                    value: ":four: **" + args3[4] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 5:",
                    value: ":five: **" + args3[5] + " **",
                    inline: false,
                  },
                ],
                // image: {
                //   url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                  text: 'Zooye.',
                  //icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
              };
              
              message.delete(); 
                  message.channel.send({ embed }).then(MessageReaction => {
                    MessageReaction.react(reaction_numbers[1]);
                    MessageReaction.react(reaction_numbers[2]);
                    MessageReaction.react(reaction_numbers[3]);
                    MessageReaction.react(reaction_numbers[4]);
                    MessageReaction.react(reaction_numbers[5]);

                  });

    
            }else if (args3.length == 7) {

              
              const embed = {
                color: "#FFB901",
                title: args3[0],
                //url: 'https://discord.js.org',
                author: {
                  name: 'Zooye',
                  icon_url: 'https://media.discordapp.net/attachments/763285123964731422/849133196195921960/image0.png?width=675&height=649',
                  url: 'https://discord.js.org',
                },
                description: 'Multiple choice poll',
                thumbnail: {
                  //url: 'https://i.imgur.com/wSTFkRM.png',
                },
                fields: [
                  {
                    name: "Option 2:",
                  value: ":one: **" + args3[1] + "**",
                    inline: false,
                  },
                  {
                    name: "Option 2:",
                    value: ":two: **" + args3[2] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 3:",
                    value: ":three: **" + args3[3] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 4:",
                    value: ":four: **" + args3[4] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 5:",
                    value: ":five: **" + args3[5] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 6:",
                    value: ":six: **" + args3[6] + " **",
                    inline: false,
                  },
                ],
                // image: {
                //   url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                  text: 'Choose by reacting to the correct emoji below.',
                  //icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
              };
              
              message.delete(); 
                  message.channel.send({ embed }).then(MessageReaction => {
                    MessageReaction.react(reaction_numbers[1]);
                    MessageReaction.react(reaction_numbers[2]);
                    MessageReaction.react(reaction_numbers[3]);
                    MessageReaction.react(reaction_numbers[4]);
                    MessageReaction.react(reaction_numbers[5]);
                    MessageReaction.react(reaction_numbers[6]);

                  });
    
            }else if (args3.length  == 8) {

              const embed = {
                color: "#FFB901",
                title: args3[0],
                //url: 'https://discord.js.org',
                author: {
                  name: 'Zooye',
                  icon_url: 'https://media.discordapp.net/attachments/763285123964731422/849133196195921960/image0.png?width=675&height=649',
                  url: 'https://discord.js.org',
                },
                description: 'Multiple choice poll',
                thumbnail: {
                  //url: 'https://i.imgur.com/wSTFkRM.png',
                },
                fields: [
                  {
                    name: "Option 2:",
                  value: ":one: **" + args3[1] + "**",
                    inline: false,
                  },
                  {
                    name: "Option 2:",
                    value: ":two: **" + args3[2] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 3:",
                    value: ":three: **" + args3[3] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 4:",
                    value: ":four: **" + args3[4] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 5:",
                    value: ":five: **" + args3[5] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 6:",
                    value: ":six: **" + args3[6] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 7:",
                    value: ":seven: **" + args3[7] + " **",
                    inline: false,
                  },
                ],
                // image: {
                //   url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                  text: 'Choose by reacting to the correct emoji below.',
                  //icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
              };
              
              message.delete(); 
                  message.channel.send({ embed }).then(MessageReaction => {
                    MessageReaction.react(reaction_numbers[1]);
                    MessageReaction.react(reaction_numbers[2]);
                    MessageReaction.react(reaction_numbers[3]);
                    MessageReaction.react(reaction_numbers[4]);
                    MessageReaction.react(reaction_numbers[5]);
                    MessageReaction.react(reaction_numbers[6]);
                    MessageReaction.react(reaction_numbers[7]);

                  });
    
            }else if (args3.length  == 9) {

              const embed = {
                color: "#FFB901",
                title: args3[0],
                //url: 'https://discord.js.org',
                author: {
                  name: 'Zooye',
                  icon_url: 'https://media.discordapp.net/attachments/763285123964731422/849133196195921960/image0.png?width=675&height=649',
                  url: 'https://discord.js.org',
                },
                description: 'Multiple choice poll',
                thumbnail: {
                  //url: 'https://i.imgur.com/wSTFkRM.png',
                },
                fields: [
                  {
                    name: "Option 2:",
                  value: ":one: **" + args3[1] + "**",
                    inline: false,
                  },
                  {
                    name: "Option 2:",
                    value: ":two: **" + args3[2] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 3:",
                    value: ":three: **" + args3[3] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 4:",
                    value: ":four: **" + args3[4] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 5:",
                    value: ":five: **" + args3[5] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 6:",
                    value: ":six: **" + args3[6] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 7:",
                    value: ":seven: **" + args3[7] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 8:",
                    value: ":eight: **" + args3[8] + " **",
                    inline: false,
                  },
                ],
                // image: {
                //   url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                  text: 'Choose by reacting to the correct emoji below.',
                  //icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
              };
              
              message.delete(); 
                  message.channel.send({ embed }).then(MessageReaction => {
                    MessageReaction.react(reaction_numbers[1]);
                    MessageReaction.react(reaction_numbers[2]);
                    MessageReaction.react(reaction_numbers[3]);
                    MessageReaction.react(reaction_numbers[4]);
                    MessageReaction.react(reaction_numbers[5]);
                    MessageReaction.react(reaction_numbers[6]);
                    MessageReaction.react(reaction_numbers[7]);
                    MessageReaction.react(reaction_numbers[8]);

                  });
    
            }else if (args3.length  == 10) {

              const embed = {
                color: "#FFB901",
                title: args[0],
                //url: 'https://discord.js.org',
                author: {
                  name: 'Zooye',
                  icon_url: 'https://media.discordapp.net/attachments/763285123964731422/849133196195921960/image0.png?width=675&height=649',
                  url: 'https://discord.js.org',
                },
                description: 'Multiple choice poll',
                thumbnail: {
                  //url: 'https://i.imgur.com/wSTFkRM.png',
                },
                fields: [
                  {
                    name: "Option 2:",
                  value: ":one: **" + args3[1] + "**",
                    inline: false,
                  },
                  {
                    name: "Option 2:",
                    value: ":two: **" + args3[2] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 3:",
                    value: ":three: **" + args3[3] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 4:",
                    value: ":four: **" + args3[4] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 5:",
                    value: ":five: **" + args3[5] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 6:",
                    value: ":six: **" + args3[6] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 7:",
                    value: ":seven: **" + args3[7] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 8:",
                    value: ":eight: **" + args3[8] + " **",
                    inline: false,
                  },
                  {
                    name: "Option 9:",
                    value: ":nine: **" + args3[9] + " **",
                    inline: false,
                  },
                ],
                // image: {
                //   url: 'https://i.imgur.com/wSTFkRM.png',
                // },
                timestamp: new Date(),
                footer: {
                  text: 'Choose by reacting to the correct emoji below.',
                  //icon_url: 'https://i.imgur.com/wSTFkRM.png',
                },
              };
              
              message.delete(); 
                  message.channel.send({ embed }).then(MessageReaction => {
                    MessageReaction.react(reaction_numbers[1]);
                    MessageReaction.react(reaction_numbers[2]);
                    MessageReaction.react(reaction_numbers[3]);
                    MessageReaction.react(reaction_numbers[4]);
                    MessageReaction.react(reaction_numbers[5]);
                    MessageReaction.react(reaction_numbers[6]);
                    MessageReaction.react(reaction_numbers[7]);
                    MessageReaction.react(reaction_numbers[8]);
                    MessageReaction.react(reaction_numbers[9]);

                  });





            } else if (args3.length > 10) {
              message.channel.send('This is not a valid command.');
              message.channel.send('There can only be a maximum of nine responses.');
              message.channel.send('To learn how to use the poll bot, do !help.')

            }
    
            
        }
    
    }