const fs = require('fs');
const path = require('path');


fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
  if (err) process.stderr.wtite(err);
  files.forEach((file) => {
    fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
      if (!stats.isDirectory()) {
        process.stdout.write(`${path.parse(file.name).name} - ${path.extname(path.join(__dirname, 'secret-folder', file.name)).slice(1)}- ${stats.size} bytes\n`);
      }
    });
  });
});