const alphabet = require('../Constants/alphabet');
const otherCharacters = require('../Constants/other');
const symbols = alphabet.split('');
const otherSymbols = otherCharacters.split('');

function cipher(msg, shift) {
  shift = shift % 26;

  const toLocaleLowerCase = msg.toLocaleLowerCase();
  let output = '';

  for (i = 0; i < toLocaleLowerCase.length; i++) {
    const currentSymbol = toLocaleLowerCase[i];

    if (currentSymbol === ' ') {
      output += currentSymbol;
      continue;
    }

    const currentSymbolIndex = symbols.indexOf(currentSymbol);
    let newIndex = currentSymbolIndex + shift;
    if (newIndex > 26) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }

    if (otherSymbols.includes(msg[i])) {
      output += msg[i];
      continue;
    }

    if (msg[i] === msg[i].toUpperCase()) {
      output += symbols[newIndex].toUpperCase();
    } else {
      output += symbols[newIndex];
    }
  }

  return output;
}

// const example = cipher('abc', 53);
// console.log(example);

module.exports = cipher;
