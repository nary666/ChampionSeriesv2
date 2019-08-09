const Discord = require("discord.js");
 
module.exports.run = async (blaki, message, args) => {
 
    let HOST = message.guild.roles.find("name", "Staff")

    let pass = (args[0]);
    let everyone = message.guild.defaultRole;
    const zasady0 = "Jeżeli jakiś team się nie zgłosi na czas, to niestety, ale nie będzie mogł zagrać tego turnieju."
    
    if(!message.member.roles.has(HOST.id)) return message.reply("Ooops, nie posiadasz uprawnień!");
    if(!args[0])message.channel.send().then(() =>
    {

    })
    message.delete();
    let customEmbed = new Discord.RichEmbed()
    .setColor("#00FFFF")
    .setTitle("**CHECK-IN!**")
    .addField("Została **OSTATNIA** godzina do **CHECK-IN**!", zasady0)
    .setTimestamp(message.createdAt)
    .setFooter("Bot stworzony dla serwera CHAMPION SERIES przez gs_nary#1297", "https://i.imgur.com/10WUhHy.png");
    message.channel.send(everyone.toString());
    message.channel.send(customEmbed).then(function (message) {
    })
}
 
module.exports.help = {
    name: "lastcheck"
}



