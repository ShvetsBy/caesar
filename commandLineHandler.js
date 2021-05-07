//commandLineHandler.js

const { program } = require('commander');

program
  .option('-s, --shift <value>')
  .option('-a, --action <action>')
  .option('-i, --input')
  .option('-o, --output');

program.parse(process.argv);

// console.log('comandline interface');

const options = program.opts();
if (options.shift) console.log(`${options.shift}`);
if (options.action) console.log(`${options.action}`);
if (options.input) console.log('input');
if (options.output) console.log('output');

// switch (options) {
//   case options.shift:
//     console.log('shift');
//     break;
//   case options.input:
//     console.log('input');
//     break;
//   case options.output:
//     console.log('output');
//     break;
//   case options.action:
//     console.log('action');
//     break;
//   default:
//     console.log(
//       'Try to use required "-s" and "-a" options and not neccesary "-i" and "-o"'
//     );
//     break;
// }
