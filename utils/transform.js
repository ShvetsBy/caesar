const { Transform } = require('stream');
const cipher = require('./cipher');

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

    this.push(cipher(chunk.toString(), shifter));

    callback();
  }
}

module.exports = MyTransform;
