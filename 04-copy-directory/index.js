const fs = require('fs');
const path = require('path');
const fileCopy = path.join(__dirname, 'files-copy');

fs.mkdir(fileCopy, { recursive: true }, (err) => {
  if (err) throw err;
  fs.readdir(fileCopy, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      fs.unlink(path.join(fileCopy, file), (err) => {
        if (err) throw err;
      });
    });
  });
  getFileNames();
});


function getFileNames() {
  const file = path.join(__dirname, 'files');
  fs.readdir(file, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      fs.copyFile(
        path.join(__dirname, 'files', file),
        path.join(__dirname, 'files-copy', file),
        (err) => {
          if (err) throw err;
        }
      );
    });
  });
}