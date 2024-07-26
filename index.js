const fs = require("fs");
//creating a new file
//fs.writeFileSync("read.txt","welcome to my channel");
// fs.writeFileSync("read.txt","Ayushi,welcome to my channel");

// fs.appendFileSync('read.txt',"how are you?")

// const buf_data = fs.readFileSync("read.txt");


// org_data = buf_data.toString();
// console.log(org.data);

fs.renameSync("readwrite.txt","read.txt");