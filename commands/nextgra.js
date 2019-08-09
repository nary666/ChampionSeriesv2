const Discord = require("discord.js");
 
module.exports.run = async (blaki, message, args) => {
 
    let HOST = message.guild.roles.find("name", "Staff")

    let pass = (args[0]);
    let everyone = message.guild.defaultRole;
    const zasady0 = "**» PROSIMY** O CIERPLIWOŚĆ ! :D "
    const check = '608996447169544203'
    
    if(!message.member.roles.has(HOST.id)) return message.reply("Ooops, nie posiadasz uprawnień!");
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **.30min <tutaj byle co można napisać> **_ ❌").then(() =>
    {

    })
    message.delete();
    let customEmbed = new Discord.RichEmbed()
    .setColor("#93F600")
    .setTitle("**INFORMACJA!**")
    .setURL('https://discord.js.org/')
    .addField("**GRY ZACZYNAJĄ SIĘ ZA 30 MINUT | PIERWSZY KLUCZ POJAWI SIĘ O GODZINIE 17:00!**", zasady0)
    .setTimestamp(message.createdAt)
    .setFooter("Bot stworzony dla serwera CHAMPION SERIES przez gs_nary#1297", "https://i.imgur.com/10WUhHy.png");
    message.channel.send(everyone.toString());
    message.channel.send(customEmbed).then(function (message) {
        message.react(check)
    })
}
 
module.exports.help = {
    name: "30min"
}

