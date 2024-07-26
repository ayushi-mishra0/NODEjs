const path = require("path");
console.log(path.dirname('C:\Users\Ayush\Desktop\NODEjs\nodeChallenge\PathModule\path.js'));

const myPath = path.parse("C:\Users\Ayush\Desktop\NODEjs\nodeChallenge\PathModule\path.js");
console.log(myPath.root);
