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

class MyTransform extends Transform {
  constructor(shift, action) {
    super();
    this.shift = shift;
    this.action = action;
  }

  _transform(chunk, encoding, callback) {
    let shiftDirection = '';

    if (this.action === 'encode') {
      shiftDirection = '+';
    } else if (this.action === 'decode') {
      shiftDirection = '-';
    }

    let shifter = parseInt(shiftDirection + this.shift);

    const result = cipher(chunk.toString(), shifter);

    callback();
  }
}

module.exports = MyTransform;
