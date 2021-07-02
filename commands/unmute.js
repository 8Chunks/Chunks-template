module.exports = {
    name: 'unmute',
    description: 'unmutes a member so they can talk! Staff only!',
    execute(message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use this command :slight_frown:");    
            
        const target = message.mentions.users.first();

        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> will be able to talk in chats now!`)
        } else {
            message.channel.send("I can't find that member!")
        }
    }
}