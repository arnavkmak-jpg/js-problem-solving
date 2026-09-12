let name = "Arnav"
let age = 22;
let isStudent = false;

console.log(`Your name is ${name}`)
console.log(`You are ${age} years old`)
console.log(`Enrolled: ${isStudent}`)

document.getElementById("p1").textContent = `Your name is ${name}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
