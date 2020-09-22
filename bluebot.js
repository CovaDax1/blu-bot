// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();
// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();

//login to Discord with your app's token
client.login()

// Listens for any messages that contain "blu " and replies with an obnoxious message.
client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (msg.content.toLowerCase().includes('blu')) {
            msg.channel.send('Did somebody say BLU?')
        } 
    }
});