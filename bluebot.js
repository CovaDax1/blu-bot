// Importing this allows you to access the environment variables of the running node process
require('dotenv').config();
// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();
const blu_words = [ "blu", "blue"]

let ver = process.env.NODE_ENV;

//login to Discord with your app's token
client.login()

// Listens for any messages that contain "blue" or "blu " and replies with an obnoxious message.
client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (blu_words.some(word => msg.content.toLowerCase().includes(word))) {
            msg.channel.send('Did somebody say BLU?')
        } 
    }
});

client.on('ready', () => {
    if (ver == 'production') {
        console.log("Prod");
    } else {
        console.log(ver);
    }
});