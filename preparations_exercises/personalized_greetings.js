//lets users input their names and returns a personalized greeting

let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);