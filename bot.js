const Discord = require('discord.js');
const jutsu = require('./naruto.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag + "!");
});

const BOT = '558810306755690497';
const JUSTIN = '188395541347041281';
const JANET = '158438213273255936';

function checkIfBotIsSender(msg) {
  return msg.author.id == BOT;
}

client.on('message', msg => {
  if (checkIfBotIsSender(msg))
    return;
  
  msgText = msg.content.toLowerCase();;
  
  if (msg.author.id == JUSTIN && Math.random() < .2) {
      msg.reply('SHUTUP');
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
    return;
  }
  
  if (
    msg.isMentioned(client.user)
    && msgText.includes('love')
  ) {
    msg.reply('someday someone will love you too');
  } else if (
    msg.isMentioned(client.user)
    && msgText.includes('tell me a joke')
  ) {
    msg.channel.send('Your life');
  } else if (
    msgText.includes('nasus')
    || msgText.includes('stack')  
    || msgText.includes('cane')  
    || msgText.includes('susan')
  ) {
    msg.channel.send('STACK!');
  } else if (
    msgText.includes('queen')
    || msgText.includes('janet')
  ) {
    msg.channel.send('Janet-kun is our precious queen!');
  } else if (
    msgText.includes('peel')
  ) {
    msg.channel.send('Peel David!');
  } else if (
    msgText.includes('best girl')
  ) {
    msg.channel.send('Best girl = Janet <3');
  } else if (
    msgText.includes('abi')
  ) {
    msg.channel.send('goose\'s e-gril');
  } else if (
    msgText == 'sneeze'
  ) {
    msg.channel.send('ACHOO');
  } else if (
    msgText.includes('ez')
  ) {
    msg.channel.send('love is ez but i am bz');
  } else if (
    msgText.includes('jutsu')
  ) {
    msg.channel.send(jutsu.pickJutsu() + '!');
  } else if (
    msgText.includes('sadboi hours')
  ) {
    msg.reply('its okay to be alone forever');
  } else if (
    msgText.includes('friend')
  ) {
    msg.channel.send('friends...what are those?');
  } else if (
    msgText.includes('support')
    || msgText.includes('galio')
  ) {
    j = client.users.get(JANET);
    msg.channel.send(`${j} play galio support`)
  } else if (
    msgText.includes('power')
  ) {
    msg.channel.send('The whites dont deserve power');
  }
});

client.login(process.env.TOKEN);

