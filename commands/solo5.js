const Discord = require("discord.js");
 
module.exports.run = async (blaki, message, args) => {
 
    let HOST = message.guild.roles.find("name", "Staff");
 
    let pass = (args[0]);
    let everyone = message.guild.defaultRole;
    const zasady0 = "**» ZAKAZ** KORZYSTANIA Z ROBOTÓW!"
    const zasady1 = "**» ZAKAZ** LEAKOWANIA HASŁA!"
    const zasady2 = "**» ZAKAZ** W-KEYOWANIA BEZCELOWEGO"
    const zasady3 = "**» ZAKAZ** STREAMSNAJPIENIA!"
    const zasady4 = "**» ZAKAZ** TEAMOWANIA SIĘ!"
    const check = '609329690318077962'
  
    if(!message.member.roles.has(HOST.id)) return message.reply("Ooops, nie posiadasz uprawnień!");
    if(!args[0]) return message.channel.send("❌ _Wprowadź prawidłowe wartości, **.solo5 hasło **_ ❌").then(() =>
    {
        message.channel.send("❌ _**Utwórz hasło, które nie będzie za krótkie!**_ ❌");
    })
    message.delete();
    let customEmbed = new Discord.RichEmbed()
    .setColor("#FFC125")
    .setTitle("**ARENA SOLO CUSTOM - GAME 5 (LAST) !**")
    .setURL('https://discord.js.org/')
    .addField("**HASŁO:**", `**${pass}**`, true)
    .addField("**HOST:**", `${message.author}`, true)
    .addField("**ZASADY:**", zasady0 + `\n` +zasady1 + `\n`+ zasady2 + `\n`+ zasady3 + `\n`+ zasady4)
    .setTimestamp(message.createdAt)
    .setFooter("Gra zacznie się o godzinie 19:05 | Bot stworzony przez gs_nary#1297", "https://i.imgur.com/U26NLKj.png");
    message.channel.send(everyone.toString());
    message.channel.send(customEmbed).then(function (message) {
        message.react(check)
    })
}
 
module.exports.help = {
    name: "solo5"
}
