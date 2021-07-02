module.exports = {
    name: 'help',
    description: 'Shows the help menu!',
    execute(message, args) {
        message.channel.send(`\`\`\`\ General Catergory:
    help    Shows this message!
    ping    Get the bot's ms!    
    clear   Clear x amout of messages! Staff only! Remember: You can not delete messages that are more than 14 days old! 
    shmeado **In dev!!**
    twitch  
    twitter 
    youtube 

    Type /help command for more info on a command.
    You can also type /help category for more info on a category.\`\`\``)
    }
}    