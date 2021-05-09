const alphabet = require('./Constants/alphabet.js');
const message = require('./Constants/msg.js');
const shift = 1;
const action = {
  encode: '+',
  decode: '-',
};

const symbols = alphabet.split('');

//function cipher(message, action, shift) {
function cipher(message, shift) {
  //   const shifter = parseInt(action + shift);
  let output = '';
  lowerCaseMsg = message.toLocaleLowerCase();

  for (let i = 0; i < lowerCaseMsg.length; i++) {
    const currentLetter = lowerCaseMsg[i];
    const currentIndex = alphabet.indexOf(currentLetter);
    // const newIndex = currentIndex + shifter;
    const newIndex = currentIndex + shift;

    if (currentLetter === ' ') {
      output += currentLetter;
      continue;
    } else {
      output += alphabet[newIndex];
    }
  }
  //console.log(output);
  return output;
}

module.exports = cipher;
// cipher(message, action.encode, shift);
