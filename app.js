const options = require('./commandLineHandler');
const cipher = require('./cipher');

// const shifter = parseInt(options.action + options.shift);

// console.log(options.action);

let shiftDirection = '';
if (options.action === 'encode') {
  shiftDirection = '+';
} else if (options.action === 'decode') {
  shiftDirection = '-';
} else {
  console.log('Enter Encode or Decode to procced');
}

const shifter = parseInt(shiftDirection + options.shift);

console.log(cipher('abc', shifter));
