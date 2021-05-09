const options = require('./commandLineHandler');
const fs = require('fs');
const MyTransform = require('./utils/transform');
const inputOutput = require('./utils/inputOutput');

if (options.action !== 'decode' && options.action != 'encode') {
  process.stderr.write('You should use propper Actions: encode or decode.\n');
  process.exit(1);
}

if (isNaN(options.shift)) {
  process.stderr.write('You should use Shift param.\n');
  process.exit(1);
}

if (
  (options.input && !fs.existsSync(options.input)) ||
  (options.output && !fs.existsSync(options.output))
) {
  process.stderr.write('There is no such file. Please check your file name.\n');
  process.exit(1);
}

const readStream = inputOutput.createReadStream(options.input);
const transformStream = new MyTransform(options.shift, options.action);
const writeStream = inputOutput.createWriteStream(options.output);
readStream.pipe(transformStream).pipe(writeStream);
