const Discord = require('discord.js');
const mongoose = require('mongoose')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const prefix = '=';
const dotenv = require('dotenv');
const fs = require('fs');
require('dotenv').config();
const MONGODB_SRV = "mongodb+srv://Chunks:12321232@discordbot.htzgn.mongodb.net/ChunksBotDB?retryWrites=true&w=majority"

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection()

function loadCommandsAndEvents() {

    // Reading command files
    const commandFolders = fs.readdirSync('./commands').filter(f => !f.includes('.'))
    for (const folder in commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${commandFolders[folder]}`).filter(file => file.endsWith('.js'))
        for (const commandFile in commandFiles) {
            const command = require(`./commands/${commandFolders[folder]}/${commandFiles[commandFile]}`)
            client.commands.set(command.name, command)
        }
    }

 // Reading event files
    const eventFolder = fs.readdirSync('./events').filter(f => f.endsWith('.js'))
    for (const eventFile in eventFolder) {
        const event = require(`./events/${eventFolder[eventFile]}`)
        const eventName = eventFolder[eventFile].split('.')[0]
    
            if (event.once) {
                client.once(eventName, (...args) => event.execute(...args, client))
            } else {
                client.on(eventName, (...args) => event.execute(...args, client))
            }
    
        }
    }

/* client.on('ready', () => {
    console.log(`Logged in as user: ${client.user.tag}, ID: ${client.user.id}`);
    client.user.setStatus('online');
    client.user.setActivity("Fortnite", {
        type: "PLAYING",
    });
    memberCounter(client)
});
*/
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('825402170114834454').send(`Welcome <@${guildMember.user.id}> to our server! <a:ablobwave:845936424540831765>`)
})

 /*client.on('guildMemberAdd'), guildMember => {
    const profileModel = require('../Chunks/models/profileSchema');
    module.exports = async(client, discord, member) => {
        let profile = await profileModel.create({
            userID: member.id,
            serverID: member.guild.id,
            coins: 1000,
            bank: 0
        });
        profile.save();
}}
*/
/*mongoose.connect(MONGODB_SRV, {
    useNowUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the database!');
}).catch((err) => {
    console.log(err);
});
*/
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    /* if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    if (command === 'help') {
        client.commands.get('help').execute(message, args);
    }
    if (command === 'clear') {
        client.commands.get('clear').execute(client, message, args);
    }
    if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    }
    if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }
    if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    }
    if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    }
    if (command === 'suggest') {
        client.commands.get('suggest').execute(message, args, Discord);
    }
    if (command === 'bugreport') {
        client.commands.get('bugreport').execute(message, args, cmd, client, discord);
    }
    if (commnad === 'twitter') {
        client.commands.get('twitter').execute(message, args, Discord);
    }
    if (command === 'youtube') {
        client.commands.get('youtube').execute(message, args, Discord);
    }
});
*/
client.login(process.env.DISCORD_TOKEN);
});