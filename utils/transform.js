const { Transform } = require('stream');
const cipher = require('./cipher');
// function getShift(action, shift) {
//   let shiftDirection = '';

//   if (action === 'encode') {
//     shiftDirection = '+';
//   } else if (action === 'decode') {
//     shiftDirection = '-';
//   } else {
//     process.stderr.write('Enter Encode or Decode to procced');
//     process.exit(1);
//   }
//   return parseInt(shiftDirection + shift);
// }

const myTransform = new Transform({
  transform(chunk, encoding, callback) {
    let shiftDirection = '';

    if (this.action === 'encode') {
      shiftDirection = '+';
    } else if (this.action === 'decode') {
      shiftDirection = '-';
    }
    // else {
    //     process.stderr.write('Enter Encode or Decode to procced');
    //     process.exit(1);
    //   }
    let shifter = parseInt(shiftDirection + shift);

    const result = cipher(chunk, shifter);

    callback();
  },
});

module.export = myTransform;
