const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","\n"]
let result = "";
const args = process.argv;
const intArgs = args[2]

for (let i = intArgs; i < alphabet.length; i++){   
    result += alphabet[i];
} 

console.log(result);