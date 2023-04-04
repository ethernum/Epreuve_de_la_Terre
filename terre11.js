const args = process.argv;
const timeInput = args[2]
const timeInputParse = String(timeInput).split(":");

//Début 

let hour = timeInputParse[0];
let minute = timeInputParse[1];

let timeInput12 = "";

let AmOrPm = hour >= 12 ? 'pm' : 'am'; //24 donc pm
if (hour == 24){AmOrPm= 'am'}
hour = (hour % 12) || 12;

timeInput12 = hour + ":" + minute + " " + AmOrPm; 

console.log("date en 24hr => " + timeInput + "\ndate en 12hr => " + timeInput12)