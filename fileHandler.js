const fs = require('fs');
const path = require('path');
const cipher = require('./cipher');
// const stream = require('stream');

//стрим для чтени

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
//лучше через create read stream
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
readable.on('end', () => {
  console.log('There will be no more data.');
});

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(cipher(chunk.toString(), 1));
    callback();
  },
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);

ipeline(
    input_stream, // input file stream or stdin stream
    transform_stream, // Transform stream
    output_stream // output file stream or stdout stream
  )
  .then(success and error callbacks)

//стрим для обрботки
//стрим для записи

// const file = fs.createWriteStream('./big.file');
