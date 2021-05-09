//commandLineHandler.js

const { program } = require('commander');

program
  .option('-s, --shift <value>')
  .option('-a, --action <action>')
  .option('-i, --input <path>')
  .option('-o, --output <path>');

program.parse(process.argv);
const options = program.opts();

module.exports = options;
