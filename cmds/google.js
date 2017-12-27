const google = require("google");
const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    
    google.resultsPerPage = 25
    let object = args;
    google.protocol = 'https';
    
    const args2 = message.content.split(' ').slice(1).join(' ');
    
    if(!args2) {
            var embed = new Discord.RichEmbed()
             		.setTitle("ERROR!")
             		.setColor("RANDOM")
             		.setDescription("No term(s) was found for me to search!")
             		.setFooter("Powered By Google", "http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png")
             		
             		message.channel.send({embed : embed});
             		    return;
        }
    
    google(object, function (err, res){
        if (err) console.error(err)
        
        
        var link = res.links[1];
        var link2 = res.links[2];
        var link3 = res.links[3];
        let test = `${link.title}\n${link.href}`;
        let test2 = `${link2.title}\n${link2.href}`;
        let test3 = `${link3.title}\n${link3.href}`;
        
        if(!link.title || link.title == undefined || link.title == null) {
            test = "Nothing Found, Sorry";
        }
        
        if(!link2.title || link2.title == undefined || link2.title == null) {
            test2 = "Nothing Found, Sorry";
        }
        
        if(!link3.title || link3.title == undefined || link3.title == null) {
            test3 = "Nothing Found, Sorry";
        }
        
        if(link.link == null) {
            test = "Nothing Found, Sorry";
        }
        
        if(link2.link == null) {
            test2 = "Nothing Found, Sorry";
        }
        
        if(link3.link == null) {
            test3 = "Nothing Found, Sorry";
        }
        
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("Search Results", `http://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1000px-Google_%22G%22_Logo.svg.png`)
            .addField("Result 1", test)
            .addField("Result 2", test2)
            .addField("Result 3", test3)
            .setTimestamp()
            .setThumbnail('https://cdn3.iconfinder.com/data/icons/picons-social/57/09-google-128.png')
            message.channel.send({embed})
    })
}

exports.help = {
    name: "google",
    description: "Searches something up on google",
    usage: "pr!google <Things To Search>",
    note: "Might help with homework"
}
