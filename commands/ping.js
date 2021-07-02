module.exports = {
    name: 'ping',
    description: 'Get the bots ms!',
    execute(message, args) {
    //if(message.member.roles.cache.has('813468963535060992' , '831874417637589022')) {     # You have to put a } at the bottom!

    const date = new Date();
    const ping = date.getTime() - message.createdAt.getTime()
    message.reply(`Pong! \`${Math.abs(ping)}ms\``);    
        }
    }
 // }   
      