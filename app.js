const options = require('./commandLineHandler');
const cipher = require('./utils/cipher');
const checkAction = require('./utils/shiftDirection');
const fs = require('fs');

const shift = checkAction(options.action);
const shifter = parseInt(shift + options.shift);

// const input = options.input
//   ? fs.createReadStream(options.input, { encoding: 'utf8' })
//   : process.stdin;

// const output = options.output
//   ? fs.createWriteStream(options.output, { encoding: 'utf8' })
//   : process.stdout;

// console.log(input);
// console.log(output);

console.log(cipher('Bcd 12 Abc', shifter));
