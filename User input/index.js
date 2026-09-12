// EASY METHOD FOR USER INPUT-

// let username;

// username = window.prompt("What's your username?");

// console.log(username);

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("H1").textContent = `Hello ${username}`
}

