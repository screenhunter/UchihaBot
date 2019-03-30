const fs = require('fs');

module.exports.pickJutsu = function() {
  jutsuList = fs.readFileSync('jutsu.txt', 'utf-8').split('\n');
  return jutsuList[Math.floor(Math.random()*jutsuList.length)];
}

module.exports.pickNinja = function() {
  ninjaList = fs.readFileSync('ninja.txt', 'utf-8').split('\n');
  return ninjaList[Math.floor(Math.random()*ninjaList.length)];
}
