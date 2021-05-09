const options = require('./commandLineHandler');
const checkAction = require('./utils/shiftDirection');
const fs = require('fs');
const myTransform = require('./utils/transform');

const shift = checkAction(options.action);
const shifter = parseInt(shift + options.shift);

function getInput(inputFile) {
  if (!inputFile) {
    return process.stdin;
  }
  if (fs.statSync(inputFile).isFile()) {
    return fs.createReadStream(inputFile);
  } else {
    process.stderr.write(
      'There is no input file. Please check your file name.'
    );
    process.exit(1);
  }
}

function getOutPut(outPutFile) {
  if (!outPutFile) {
    return process.stdout;
  }
  if (fs.statSync(outPutFile).isFile()) {
    console.log(outPutFile);
    return fs.createWriteStream(outPutFile);
  } else {
    process.stderr.write(
      'There is no output file. Please check your file name.'
    );
    process.exit(1);
  }
}
console.log(options.shift, options.action);

const readStream = getInput(options.input);
const transformStream = myTransform(options.shift, options.action);
const writeStream = getOutPut(options.outPutFile);

readStream.pipe(transformStream).pipe(writeStream);
