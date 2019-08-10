const blakiconfig = require("./blakiconfig.json");
const Discord = require('discord.js');
const blaki = new Discord.Client({disableEveryone: false});
require('dotenv-flow').config();
 
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
 
blaki.login(config.token);
 
