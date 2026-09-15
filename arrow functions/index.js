// arrow functions

const numbers = [1,2,3,4,5,6];

// squaring
const square = numbers.map(element => Math.pow(element,2));
console.log(square);

// cubing
const cube = numbers.map(element => Math.pow(element,3));
console.log(cube);

// print even numbers
const evenNums = numbers.filter(element => element%2===0);
console.log(evenNums);

//print odd numbers
const oddNums = numbers.filter(element => element%2!==0);
console.log(oddNums);

// print the total
const total = numbers.reduce((accumulator,element) => accumulator+element);
console.log(total);