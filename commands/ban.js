module.exports = {
    name: 'ban',
    description: 'bans a member from the Discord server! Staff only!',
    execute(client, message, args) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You can't use this command :slight_frown:");   
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.ban();
            message.reply("The mentioned user has been banned!")
        } else {
            message.reply("You couldn't ban that member!");
        }
    }
}    