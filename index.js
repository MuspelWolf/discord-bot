const Discord = require('discord.js');

const client = new Discord.Client();
client.login("Nzk5MzM1NTk0OTU3NDcxNzYy.YACFSA.5WdNcCV-1CqoyOtRnuo3mFt3lHs");

client.on('ready', async () => {
    console.log(`Logged in successfully as bot!`);
});


client.on('message', (msg) => {
    msg.content = msg.content.trim();
    const flag = 'pene';
    if (msg.content.startsWith(flag)) {
        msg.author.send("Hello, this is a DM!");
        msg.delete({timeout: 1000});
    }

});