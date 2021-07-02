const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')
module.exports = {
    name: 'suggest',
    description: 'Create a suggestion!',
    execute(message, args, cmd, client, discord) {
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if (!channel) return message.channel.send("Suggestions channel does not exist!");

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
            .setColor('#FADF2E')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            msg.react('👍')
            msg.react('👎')
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}