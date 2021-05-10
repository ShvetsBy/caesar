const { createReadStream, createWriteStream } = require('fs');

module.exports = {
  createReadStream(input) {
    return input ? createReadStream(input) : process.stdin;
  },

  createWriteStream(output) {
    return output
      ? createWriteStream(output, { encoding: 'utf-8', flags: 'a' })
      : process.stdout;
  },
};
