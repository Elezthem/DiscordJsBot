const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

const token = 'YOUR_TOKEN';

client.once('ready', () => {
  console.log(`Bot is running as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === '!hello') {
    message.reply('Hello!');
  }
});

client.login(token);
