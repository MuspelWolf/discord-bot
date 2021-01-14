const Discord = require('discord.js');
const fs = require("fs");

fs.readFile('token.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      var token = data.toString();
   });

const client = new Discord.Client();
client.login(token);

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