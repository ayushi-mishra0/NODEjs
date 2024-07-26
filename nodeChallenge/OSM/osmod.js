const os = require("os");

console.log(os.arch());

// const freeMemory = os.freemem();
// console.log(`${freeMemory /2024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory /2024 / 1024 / 1024}`);


