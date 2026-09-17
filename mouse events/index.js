const box = document.getElementById("box");

box.addEventListener("click",event=>{ 
    box.style.background = "pink";
    box.textContent = "congrats 🎂"
});

box.addEventListener("mouseover",event=>{
    box.style.backgroundColor = "yellow";
    box.textContent = "Will you do it ⁉️⁉️"
})

box.addEventListener("mouseout",event=>{
    box.style.backgroundColor = "hsl(128, 100%, 59%)";
    box.textContent = " click me 😎";
})