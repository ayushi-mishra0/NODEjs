// Define the maximum value
const MAX_VALUE = 100;
let sum = 0;
for (let i = 1; i < MAX_VALUE; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
        sum += i;
    }
}
console.log('Sum of multiples of 3 and 5 below 100:', sum);
