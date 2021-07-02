module.exports = async (client) => {
    const guild = client.guilds.cache.get('789863108176642088'); // Put your guild ID
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('858082853286707231'); // Arism put your voice channel id 
        channel.setName(`Jayparm's Members - ${memberCount.toString()}`)
        console.log('Updating Member Count');
    },300000);
}