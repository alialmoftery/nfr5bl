const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);

});

client.on('guildMemberAdd' ,member => {
  if(member.guild.id !== '474567474940084234') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '512734412501155840').send('*Welcome To* ***Fèarless*** *Server*..');
},3000);
});
var PrEfix = "N";
client.on('message', message => {
  if (!message.content.startsWith(PrEfix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '490803489765720064') return;
if (message.content.startsWith(PrEfix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else

if (message.content.startsWith(PrEfix + 'ls')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else
if (message.content.startsWith(PrEfix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});
client.login("NDI5NjQwNTg1NjgzNjY0ODk3.Dtjo-g.gCs5zUWVmtQfzqQArBwyQyW3NQA");