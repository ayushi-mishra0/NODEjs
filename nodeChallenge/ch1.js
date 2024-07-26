const fs = require("fs");
 
//fs.mkdirSync("Ayushi");
//fs.writeFileSync("Ayushi/bio.txt","My name is Ayushi Mishra");
// const data = fs.readFileSystem("Ayushi/bio.txt","utf-8");
// console.log(data);

fs.renameSync("Ayushi/bio.txt","Ayushi/myBio.txt");
