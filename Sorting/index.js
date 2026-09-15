let numbers = [3,7,2,1,8,5,4,3];

numbers.sort((a,b)=>b-a);

console.log(numbers);

let fruits = ["oranges","bananas","apples","pineapple"];

fruits.sort((a,b)=>b.localeCompare(a)); // for reverse sorting strings

console.log(fruits);