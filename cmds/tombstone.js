const Discord = require('discord.js');
const prefix = "m?"

exports.run = (bot, message, args) => {
    if (!args) {
        console.log("1")
        message.channel.send("Incorrect Usage! The correct usage is `pr!tombstone [args]`")
        return;
    } else {
    var image = new Discord.Attachment(`http://www.tombstonebuilder.com/generate.php?top1=${args.join(" ")}`, "tombstone.png")
    message.channel.send(image)
    }};

exports.help = {
    name: "tombstone",
    description: "Make a tombstone!",
    usage: `${prefix}tombstone_[LINE1]_[LINE2]_[LINE3]_[LINE4]`,
    note: "Spooky!"
};