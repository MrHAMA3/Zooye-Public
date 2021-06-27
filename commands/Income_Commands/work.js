const DB = require('djs-economy');
module.exports = {
    name: 'work',
    description: 'work command',
    aliases: [],
    cooldown: 150,
    async execute(message) {
  //      if(message.deletable) message.delete()
        const check = await DB.GetCash(message.author.id)
        const work = DB.Work(100000, 300000, message.author.id); // DB.Work(Min Value, Max Value, UserID)
        const { MessageEmbed } = require('discord.js');
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription(`You worked as a \`${work.job}\` and got paid $ ${work.cash.toLocaleString()}\nYou now have $${check.cash.toLocaleString() + work.cash.toLocaleString()}`);
        return message.channel.send(embed); 
    }
}
