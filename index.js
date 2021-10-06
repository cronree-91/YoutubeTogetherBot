require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);

client.once('ready', () => {
	console.log('準備完了！');
});

client.on('messageCreate', async message => {
	if (message.content === '!yt') {
		if(message.member.voice.channel) {
			client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
				return message.channel.send(`${invite.code}`);
			});
		};
	};
});

client.login(process.env.TOKEN);