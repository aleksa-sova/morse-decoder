const MORSE_TABLE = {
    '.-':'a',
    '-...':'b',
    '-.-.':'c',
    '-..':'d',
    '.':'e',
    '..-.':'f',
    '--.':'g',
    '....':'h',
    '..':'i',
    '.---':'j',
    '-.-':'k',
    '.-..':'l',
    '--':'m',
    '-.':'n',
    '---':'o',
    '.--.':'p',
    '--.-':'q',
    '.-.':'r',
    '...':'s',
    '-':'t',
    '..-':'u',
    '...-':'v',
    '.--':'w',
    '-..-':'x',
    '-.--':'y',
    '--..':'z',
    '.----':'1',
    '..---':'2',
    '...--':'3',
    '....-':'4',
    '.....':'5',
    '-....':'6',
    '--...':'7',
    '---..':'8',
    '----.':'9',
    '-----':'0',
};

let split = (splitStr) => splitStr.match(/.{1,10}/g);

function decode(expr) {
    let splitArray = split(expr)
    let morseArray = splitArray.map(elem => {
        return elem.replace(/10/g, ".").replace(/11/g, "-").replace(/0/g, "")
    })
    return morseArray.map(elem => {
        return MORSE_TABLE[elem]
    }).join("")
}

module.exports = {
    decode
}




// const convertToMorse = (str) => {
//     return str.toUpperCase().split("").map(el => {
//        return morseCode[el] ? morseCode[el] : el;
//     }).join("");
//  };

// function decode(expr) {
//     // write your solution here
// }

// module.exports = {
//     decode
// }

// function decode(expr){
//     let result = ""
//     let tmp = expr.trim()
//     tmp += " "
//     let stk = ""
//     for(let i = 0; i < tmp.length; i++){
//       let s = tmp[i]
//       stk += s
//       switch(stk){
//         case "...---... ":
//           result += "SOS"
//           stk = ""
//           break
//         case "  ":
//           result += " "
//           stk = ""
//           break;
//         case ". ":
//           result += "E"
//           stk = ""
//           break;
//         case "- ":
//           result += "T"
//           stk = ""
//           break;
//         case ".. ":
//           result += "I"
//           stk = ""
//           break;
//         case "... ":
//           result += "S"
//           stk = ""
//           break;
//         case ".... ":
//           result += "H"
//           stk = ""
//           break;
//         case "...- ":
//           result += "V"
//           stk = ""
//           break;
//         case "..- ":
//           result += "U"
//           stk = ""
//           break;
//         case "..-. ":
//           result += "F"
//           stk = ""
//           break;
//         case ".- ":
//           result += "A"
//           stk = ""
//           break;
//         case ".-. ":
//           result += "R"
//           stk = ""
//           break;
//         case ".-.. ":
//           result += "L"
//           stk = ""
//           break;
//         case ".-- ":
//           result += "W"
//           stk = ""
//           break;
//         case ".--. ":
//           result += "P"
//           stk = ""
//           break;
//         case ".--- ":
//           result += "J"
//           stk = ""
//           break;
//         case "-. ":
//           result += "N"
//           stk = ""
//           break;
//         case "-.. ":
//           result += "D"
//           stk = ""
//           break;
//         case "-... ":
//           result += "B"
//           stk = ""
//           break;
//         case "-..- ":
//           result += "X"
//           stk = ""
//           break;
//         case "-.- ":
//           result += "K"
//           stk = ""
//           break;
//         case "-.-. ":
//           result += "C"
//           stk = ""
//           break;
//         case "-.-- ":
//           result += "Y"
//           stk = ""
//           break;
//         case "-- ":
//           result += "M"
//           stk = ""
//           break;
//         case "--. ":
//           result += "G"
//           stk = ""
//           break;
//         case "--.. ":
//           result += "Z"
//           stk = ""
//           break;
//         case "--.- ":
//           result += "Q"
//           stk = ""
//           break;
//         case "-.-.-- ":
//           result += "!"
//           stk = ""
//           break;
//         case ".-.-.- ":
//           result += "."
//           stk = ""
//           break;
//         case "--- ":
//           result += "O"
//           stk = ""
//           break;
        
//       }
//     }
//     return result
//   }
// module.exports = {
//     decode
// }