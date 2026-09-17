// DOM Navigation

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousELementSibling
// .parentElement
// .children

const fruits = document.getElementById("fruits");
const fruits2 = document.querySelectorAll("ul")

fruits2.forEach(ul=>{
    const first = ul.firstElementChild;
    first.style.backgroundColor = "yellow";
});

const fruits3 = document.getElementById("apple");

fruits3.nextElementSibling.style.backgroundColor = "blue"

const fruits4 = document.getElementById("desserts");



Array.from(fruits4.children).forEach(child=>{
    child.style.backgroundColor = "red"}
)

fruits4.children[2].style.backgroundColor = "green";