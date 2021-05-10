const fs = require('fs');

function checkFile(path) {
  fs.stat(path, function (err, stat) {
    if (err == null) {
      console.log('File exists: ' + path);
    } else if (err.code === 'ENOENT') {
      // file does not exist
      console.log('no file');
    } else {
      console.log('Some other error: ', err.code);
    }
  });
}

module.exports = checkFile;
