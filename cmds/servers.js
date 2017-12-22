const _discord = require('discord.js')

exports.run = (bot, message, args) => {
	var authors = ["265279363199533068", "262410813254402048"];
    if(!authors.includes(message.author.id)) {
		const guilds = bot.guilds.map(g=>`${g.name} :: ${g.owner.user.username} :: ${g.members.size} users :: ${g.channels.size} channels`).join('\n')
		message.channel.send(`= Prisim's Servers =\n [Guild Name :: Guild Owner :: Guild Member Size :: Guild Channels Size] \n \n ${guilds}`, {code:'asciidoc'});
} else {
			const guilds2 = bot.guilds.map(g=>`${g.name} :: ${g.owner.user.tag} :: ${g.members.size} users :: ${g.channels.size} channels`).join('\n')
		message.channel.send(`= Prisim's Servers =\n [Guild Name :: Guild Owner :: Guild Member Size :: Guild Channels Size] \n \n ${guilds2}`, {code:'asciidoc'});
}}
exports.help = {
name: "servers",
description: "Gets all the servers the bot is in",
usage: "pr!servers",
note: "There are more to come!"
}
