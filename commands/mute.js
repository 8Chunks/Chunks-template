const ms = require('ms')
module.exports = {
    name: 'mute',
    description: 'Mutes a member so they can\'t talk! Staff only!',
    execute(message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't use this command :slight_frown:");
        
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole);
                message.reply(`<@${memberTarget.user.id}> has been given the muted role!`)
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole);
            message.reply(`<@${memberTarget.user.id}> has been given the muted role for ${ms(ms(args[1]))}!`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.reply("I can't find that member!");
        }
    }
}