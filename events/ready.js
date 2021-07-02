client.on('ready', () => {
    console.log(`Logged in as user: ${client.user.tag}, ID: ${client.user.id}`);
    client.user.setStatus('online');
    client.user.setActivity("Fortnite", {
        type: "PLAYING",
    });
   // memberCounter(client)
});