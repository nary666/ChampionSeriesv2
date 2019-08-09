const blakiconfig = require("./blakiconfig.json");
const Discord = require('discord.js');
const blaki = new Discord.Client({disableEveryone: false});
require('dotenv-flow').config();
var schedule = require('node-schedule');
 
const fs = require("fs");
blaki.commands = new Discord.Collection();
 
const config = {
    token: process.env.TOKEN
};
 
let date = require('date-and-time');
 
blaki.on('ready', async () => 
{
  console.log(`${blaki.user.username} jest online!`);
  blaki.user.setActivity('CUSTOMY CHAMPION SERIES', { type: 'PLAYING'});
});
 
fs.readdir("./commands/", (err, files) => {
 
  if(err) console.log(err);
 
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
 
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    blaki.commands.set(props.help.name, props);
  });
 
});
 
blaki.on("message", async message => {
    
    if(message.author.blaki) return;
    if(message.channel.type === "dm") return;
  
    let prefix = blakiconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = blaki.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(blaki,message,args);
 
    var rule = new schedule.RecurrenceRule();
    rule.hour= 14;
    rule.minute= 30;
    const x_channel = blaki.channels.get("609144687789473906");
    let everyone = message.guild.defaultRole;
    var j = schedule.scheduleJob(rule, function(){
      const zasady0 = "Jeżeli jakiś team się nie zgłosi na czas, to niestety, ale nie będzie mogł zagrać tego turnieju."
      let customEmbed = new Discord.RichEmbed()
      .setColor("#00FFFF")
      .setTitle("CHECK-IN!")
      .addField("Została OSTATNIA godzina do CHECK-IN!", zasady0)
      .setFooter("Bot stworzony dla serwera CHAMPION SERIES przez gs_nary#1297", "https://i.imgur.com/U26NLKj.png");
      x_channel.send(everyone.toString());
      x_channel.send(customEmbed);
    });
  
});
 
blaki.login(config.token);
 