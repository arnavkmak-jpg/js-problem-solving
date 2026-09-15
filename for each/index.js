let fruits = ["apple","bananas","oranges","pineapple"];

fruits.forEach(capitalise);
fruits.forEach(display);

// array.forEach(callback)
// element, index, array

function capitalise(element, index, array){
    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}

function display(element){
    console.log(element);

}

//map() function

//used if we need to apply a specific operation to each element of an array returns a new array

const dates = ["2024-5-10","2025-7-25","2026-12-25"];

const formattedDates = dates.map(dateFormat);

console.log(formattedDates);

function dateFormat(element){
    const formatted = element.split("-") // split divides an element into new subarrays
    return `${formatted[0]}/${formatted[1]}/${formatted[2]}`;

}

const nums = [1,2,3,4,5];

console.log(nums.map(square));

function square(element){
    return Math.pow(element,2);

}

//filter() function

//used when we want to filter out an array returns a new array with undesired elements removed

const fruits2 = ["Apple","Coconut","Banana","Pineapple","Guava"]

console.log(fruits2.filter(shortFruits));

function shortFruits(element){
    return element.length<=6;

}

//reduce() function

const numbers = [12,34,56,82,22,34,56,78];

console.log(numbers.reduce(minNum));
console.log(numbers.reduce(
    function(accumulator,element){
        return Math.max(accumulator,element); // function expression no need of a name
    }));

function minNum(accumulator, element){
    return Math.min(accumulator,element);
}

