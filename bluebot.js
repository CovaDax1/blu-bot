// require the discord.js module
const Discord = require('discord.js');
// create config object
const config = require('./config.json')
// create a new Discord client
const client = new Discord.Client();


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
    console.log(config["blu-words"].some(word => "something blu is here".includes(word)))
});

//login to Discord with your app's token
client.login(config.token)

// Listens for any messages that contain "blue" or "blu " and replies with an obnoxious message.
client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (config["blu-words"].some(word => msg.content.toLowerCase().includes(word))) {
            msg.channel.send('Did somebody say BLU?')
        } 
    }
});