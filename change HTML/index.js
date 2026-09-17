// 1. Create a new element
const newListItem = document.createElement("li");

// *Modify html using JS directly

const fruits = document.getElementById("fruits");
fruits.style.fontSize = "2em";
fruits.style.textAlign = "center";
fruits.style.margin = "20px";
fruits.style.fontWeight = "bold";

// 2. Add attributes/properties

newListItem.textContent = "guava" 
newListItem.style.backgroundColor = "red";


// 3. Append the element to DOM

// fruits.append(newListItem);
const listItems = document.querySelectorAll("li"); // select all list items
fruits.insertBefore(newListItem,listItems[2]); // insert it before the list item with index 2

// 4. Remove the element

// fruits.removeChild(newListItem);

// document.getElementById("apple").remove();



// fruits.removeChild(orange);
