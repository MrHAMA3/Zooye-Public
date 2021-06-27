 const canvacord = require('canvacord/src/Canvacord');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'affect',
    description: 'Sends a \'No, it doesn\'t affect my baby\' meme.',
    usage: 'affect <@mention>',
    aliases: [],
     async execute(message, args) {
        const member = message.mentions.users.first() || message.author;
        const memberAvatar = member.displayAvatarURL({ dynamic: false, format: 'png' })

        const image = await canvacord.affect(memberAvatar)
        const affect = new MessageAttachment(image, 'affect.png')
        return message.channel.send(affect)
    }
}