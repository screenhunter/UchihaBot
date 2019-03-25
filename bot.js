const Discord = require('discord.js');
const jutsu = require('./naruto.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag + "!");
});

t = 0;
prevMsg = null;

client.on('message', msg => {
  if (msg.author.id == '188395541347041281') {
    if (msg.createdTimestamp - t > 60000)
      msg.reply('SHUTUP');
    t = msg.createdTimestamp;
    return;
  }
  console.log(msg.channel);
  if (msg.channel.id != '559310068240351233' && !(prevMsg == null) && msg.createdTimestamp - prevMsg.createdTimestamp < 10000)
    return;
  if (msg.content.toLowerCase().includes('is gone')) {
    index = msg.content.toLowerCase().indexOf(' is gone');
    while (index > 0 && msg.content.charAt(index - 1).match('[a-zA-Z ]') != null) {
      index--;
    }
    console.log(index);
    console.log(msg.content.indexOf(' is gone'));
    name = msg.content.substring(index, msg.content.indexOf(' is gone'));
    msg.channel.send(`\:crab: ${name} is gone \:crab:`);
  }
  if (msg.isMentioned(client.user) && msg.content.toLowerCase().includes('love')) {
    msg.reply('someday someone will love you too');
  } else if (msg.isMentioned(client.user) && msg.content.toLowerCase().includes('tell me a joke')) {
    msg.channel.send('Your life');
  } else if (msg.content.toLowerCase().includes('nasus')) {
    msg.channel.send('STACK!');
  } else if ((msg.content.toLowerCase().includes('queen')
    || msg.content.toLowerCase().includes('janet'))
    && msg.author.id != '558810306755690497') {
    msg.channel.send('Janet-kun is our queen!');
  } else if (msg.content.toLowerCase().includes('peel')
    && msg.author.id != '558810306755690497') {
    msg.channel.send('Peel David!');
  } else if (msg.content.toLowerCase().includes('best girl')
    && msg.author.id != '558810306755690497') {
    msg.channel.send('Best girl = Janet <3');
  } else if (msg.content.toLowerCase().includes('abi')) {
    msg.channel.send('Who is best girl\'s best girl? ABI');
  } else if (msg.content.toLowerCase() == 'sneeze') {
    msg.channel.send('ACHOO');
  } else if (msg.content.toLowerCase().includes('ez')) {
    msg.channel.send('love is ez but i am bz');
  } else if (msg.content.toLowerCase() == 'jutsu') {
    msg.channel.send(jutsu.pickJutsu() + '!');
  }
  prevMsg = msg;
});

client.login('NTU4ODEwMzA2NzU1NjkwNDk3.D3g8Fw.VT78BzdeT9EvKsdEpUi2H1SkE9M');

