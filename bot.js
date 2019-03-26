const Discord = require('discord.js');
const jutsu = require('./naruto.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag + "!");
});

const BOT = '558810306755690497';
const JUSTIN = '188395541347041281';

function checkIfBotIsSender(msg) {
  return msg.author.id == BOT;
}

t = 0;

client.on('message', msg => {
  msgText = msg.content.toLowerCase();;
  if (msg.author.id == JUSTIN) {
    if (msg.createdTimestamp - t > 60000)
      msg.reply('SHUTUP');
    t = msg.createdTimestamp;
    return;
  }
  if (msgText.includes('is gone')) {
    index = msgText.indexOf(' is gone');
    while (index > 0 && msg.content.charAt(index - 1).match('[a-zA-Z ]') != null) {
      index--;
    }
    console.log(index);
    console.log(msg.content.indexOf(' is gone'));
    name = msg.content.substring(index, msg.content.indexOf(' is gone'));
    msg.channel.send(`\:crab: ${name} is gone \:crab:`);
  }
  if (msg.isMentioned(client.user) && msgText.includes('love')) {
    msg.reply('someday someone will love you too');
  } else if (msg.isMentioned(client.user) && msgText.includes('tell me a joke')) {
    msg.channel.send('Your life');
  } else if ((msgText.includes('nasus')
    || msgText.includes('stack')  
    || msgText.includes('cane')  
    || msgText.includes('susan'))
    && !checkIfBotIsSender(msg)
    ) {
    msg.channel.send('STACK!');
  } else if ((msgText.includes('queen')
    || msgText.includes('janet'))
    && !checkIfBotIsSender(msg)) {
   msg.channel.send('Janet-kun is our queen!');
  } else if (msgText.includes('peel')
    && !checkIfBotIsSender(msg)) {
    msg.channel.send('Peel David!');
  } else if (msgText.includes('best girl')
    && !checkIfBotIsSender(msg)) {
    msg.channel.send('Best girl = Janet <3');
  } else if (msgText.includes('abi')
    && !checkIfBotIsSender(msg)) {
    msg.channel.send('Who is best girl\'s best girl? ABI');
  } else if (msgText == 'sneeze') {
    msg.channel.send('ACHOO');
  } else if (msgText.includes('ez')
    && !checkIfBotIsSender(msg)) {
    msg.channel.send('love is ez but i am bz');
  } else if (msgText == 'jutsu'
    && !checkIfBotIsSender(msg)) {
    msg.channel.send(jutsu.pickJutsu() + '!');
  } else if (msgText.includes('sadboi hours')) {
    msg.reply('its okay to be alone forever');
  } else if (msgText.includes('friend')
    && !checkIfBotIsSender(msg)) {
    msg.channel.send('friends...what are those?');
  }
  prevMsg = msg;
});

client.login(process.env.TOKEN);

