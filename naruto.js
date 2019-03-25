const fs = require('fs');

module.exports = {
  pickJutsu: function() {
    jutsuList = fs.readFileSync('jutsu.txt', 'utf-8').split('\n');
    return jutsuList[Math.floor(Math.random()*jutsuList.length)];
  }
}
