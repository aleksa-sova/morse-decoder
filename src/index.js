const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
//   let  MORSE_TABLE2 = Object.keys(MORSE_TABLE);
  
//   let result = [];
  
// //   let refinedData = MORSE_TABLE2.split('   ');
//   for (let i = 0; i < MORSE_TABLE2.length; i++) {
//       let temp = MORSE_TABLE2[i].split(' ');
//     //   temp = temp.trim();
//       for (let j = 0; j < temp.length; j++) {
//       if (MORSE_TABLE2[temp[j]]) {
//         result.push(MORSE_TABLE2[temp[j]]);
//       }
//     }
    
//     if (i !== MORSE_TABLE2.length - 1) {
//     result.push(' ');
//     }
//   }
//   console.log(result)
//   return result.join('');
}

console.log(MORSE_TABLE['.-']);
console.log(MORSE_TABLE['-...']);
console.log(MORSE_TABLE['-.-.']);
console.log(MORSE_TABLE['-..']);
console.log(MORSE_TABLE['.']);
console.log(MORSE_TABLE['..-.']);
console.log(MORSE_TABLE['--.']);
console.log(MORSE_TABLE['....']);
console.log(MORSE_TABLE['..']);
console.log(MORSE_TABLE['.---']);
console.log(MORSE_TABLE['-.-']);
console.log(MORSE_TABLE['.-..']);
console.log(MORSE_TABLE['--']);
console.log(MORSE_TABLE['-.']);
console.log(MORSE_TABLE['---']);
console.log(MORSE_TABLE['.--.']);
console.log(MORSE_TABLE['--.-']);
console.log(MORSE_TABLE['.-.']);
console.log(MORSE_TABLE['...']);
console.log(MORSE_TABLE['-']);
console.log(MORSE_TABLE['..-']);
console.log(MORSE_TABLE['...-']);
console.log(MORSE_TABLE['.--']);
console.log(MORSE_TABLE['-..-']);
console.log(MORSE_TABLE['-.--']);
console.log(MORSE_TABLE['--..']);
console.log(MORSE_TABLE['.----']);
console.log(MORSE_TABLE['..---']);
console.log(MORSE_TABLE['...--']);
console.log(MORSE_TABLE['....-']);
console.log(MORSE_TABLE['.....']);
console.log(MORSE_TABLE['-....']);
console.log(MORSE_TABLE['--...']);
console.log(MORSE_TABLE['---..']);
console.log(MORSE_TABLE['----.']);
console.log(MORSE_TABLE['-----']);

// decode("00000000100000111010101010111100111011100000001011111110101011111010101010101010")
module.exports = {
    decode
}