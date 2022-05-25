const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');

const pathToCreateFile = path.join(__dirname, 'text.txt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.write('Enter your quetion:\n');
appendFile();
rl.on('line', createLine);
rl.on('close', close);
process.on('SIGINT', close);

function appendFile(input = '') {
  fs.appendFile(pathToCreateFile, input, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function createLine(line) {
  const answer = line.trim();
  if (answer === 'exit') {
    rl.close();
  } else {
    appendFile(answer + '\n');
  }
}
function close() {
  rl.removeListener('line', createLine);
  rl.write('All done, thx.\n');
  rl.pause();
}

appendFile();
