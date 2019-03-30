const schedule = require('node-schedule');
const Discord = require('discord.js');
const naruto = require('./naruto.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag + "!");
});

const BOT = '558810306755690497';
const JUSTIN = '188395541347041281';
const JANET = '158438213273255936';

const STREAM = '536340953892651058';

function checkIfBotIsSender(msg) {
  return msg.author.id == BOT;
}

function checkIfTriggerNameCommand(msg) {
  return Math.random() < 0.1 || msg.isMentioned(client.user);
}

job = schedule.scheduleJob('0 16 * * *', function() {
  client.channels.get('517137845589245974').send(naruto.pickNinja());
});

client.on('presenceUpdate', (oldMember, newMember) => {
  if (newMember.presence.game != null && newMember.presence.game.streaming
      && (oldMember.presence.game == null || !oldMember.presence.game.streaming)) {
    client.channels.get(STREAM).send(newMember.displayName + " is streaming " + newMember.presence.game.name + "!\nCheck them out at " + newMember.presence.game.url);
  }
});

client.on('message', msg => {
  
  msgText = msg.content.toLowerCase();
  if (checkIfBotIsSender(msg))
    return;
  
  if(checkIfTriggerNameCommand(msg)) {
    if (msg.author.id == JUSTIN) {
      msg.reply('SHUTUP');
    } else if (msgText.includes('queen') || msgText.includes('janet')) {
      msg.channel.send('Janet-kun is our precious queen!');
    } else if (msgText.includes('best girl')) {
      msg.channel.send('Best girl = Janet <3');
    } else if (msgText.includes('abi')) {
      msg.channel.send('goose\'s master');
    }
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
  
  if (msg.isMentioned(client.user) && msgText.includes('love')) {
    msg.reply('someday someone will love you too');
  } else if (msg.isMentioned(client.user) && msgText.includes('tell me a joke')) {
    msg.channel.send('Your life');
  } else if (
    msgText.includes('nasus')
    || msgText.includes('stack')
    || msgText.includes('cane')
    || msgText.includes('susan')
  ) {
    msg.channel.send('STACK!');
  } else if (msgText.includes('peel')) {
    msg.channel.send('Peel David!');
  } else if (msgText == 'sneeze') {
    msg.channel.send('ACHOO');
  } else if (msgText.includes('anthem')) {
    msg.channel.send('love is ez but i am bz');
  } else if (msgText.includes('jutsu')) {
    msg.channel.send(naruto.pickJutsu() + '!');
  } else if (msgText.includes('sadboi hours')) {
    msg.reply('its okay to be alone forever...sike have fun being alone loser');
  } else if (msgText.includes('friend')) {
    msg.channel.send('friends...what are those?');
  } else if (msgText.includes('support')|| msgText.includes('galio')) {
    j = client.users.get(JANET);
    msg.channel.send(`${j} play galio support`)
  } else if (msgText.includes('power')) {
    msg.channel.send('The whites dont deserve power');
  } else if (msgText.includes('underage')) {
    msg.channel.send('ABORT ABORT');
  }
});

client.login(process.env.TOKEN);

