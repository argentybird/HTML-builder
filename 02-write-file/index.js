const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');

const stdin = process.stdin;
const pathFile = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(pathFile); //Creation record stream in text file

console.log('Welcome to Node.js! Please, enter your text:');

const readingLine = readline.createInterface({ input: stdin, output });

readingLine.on('line', (text) => {
    if (text.trim() === 'exit') {
        console.log('\nThanks for studying Node.Js!');
        readingLine.close();
    }
    output.write(`${text}\n`);
});

//break with press CTRL + C
process.on('SIGINT', () => {
    console.log('\nThanks for studying Node.Js!');
    process.exit();
});