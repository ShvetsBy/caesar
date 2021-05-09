const fs = require('fs');
const isFileExist = require('./utils/checkFileExist');
const cipher = require('./utils/cipher');
const stream = require('stream');

function streamHadler(inputFile, outputFile)
const input_stream = inputFile
  ? fs.createReadStream(inputFile, { encoding: 'utf8' })
  : process.stdin;

const transform_stream = new stream.Transform({
  transform(chunk, encoding, callback) {
    this.push(cipher(chunk.toString(), 1));
    callback();
  },
});

const output_stream = outputFile
  ? fs.createWriteStream(outputFile, { encoding: 'utf8' })
  : process.stdout;

input_stream.pipe(transform_stream).pipe(output_stream)

// console.log(isFileExist('./files/input.txt'));
// console.log(isFileExist('./files/output.txt'));

// function inputFile(path) {
//   fs.readFile(path, 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// }

// inputFile('./files/input.txt');

// const stream = require('stream');

//стрим для чтени

// fs.readFile('./files/input.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// //лучше через create read stream
// const readable = getReadableStreamSomehow();
// readable.on('data', (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data.`);
// });
// readable.on('end', () => {
//   console.log('There will be no more data.');
// });

// const { Transform } = require('stream');
// const upperCaseTr = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(cipher(chunk.toString(), 1));
//     callback();
//   },
// });

// process.stdin.pipe(upperCaseTr).pipe(process.stdout);

// pipeline(
//     input_stream, // input file stream or stdin stream
//     transform_stream, // Transform stream
//     output_stream // output file stream or stdout stream
//   )
//   .then(success and error callbacks)

//стрим для обрботки
//стрим для записи

// const file = fs.createWriteStream('./big.file');
