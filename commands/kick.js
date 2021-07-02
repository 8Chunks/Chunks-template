module.exports = {
    name: 'kick',
    description: 'Kicks a member from the Discord server! Staff only!',
    execute(message, args) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't use this command :slight_frown:");
        
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.kick();
            message.reply("The mentioned user has been kicked succesfully!")
        } else {
            message.reply("You couldn't kick that member!");
        }
    }
}    
 
 