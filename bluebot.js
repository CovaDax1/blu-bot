// require the discord.js module
const Discord = require('discord.js');
// create a new Discord client
const client = new Discord.Client();

const token = process.env.TOKEN;
const blu_words = JSON.parse(process.env.BLU_WORDS);

//login to Discord with your app's token
client.login(token)

// Listens for any messages that contain "blue" or "blu " and replies with an obnoxious message.
client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (blu_words.some(word => msg.content.toLowerCase().includes(word))) {
            msg.channel.send('Did somebody say BLU?')
        } 
    }
});

