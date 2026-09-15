function updateClock(){
    const time = new Date();
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2,0);
    const seconds = time.getSeconds().toString().padStart(2,0);
    const meridiem = (hours>=12)?"PM":"AM";
    
    hours = hours%12 || 12;
    hours = hours.toString().padStart(2,0);
    const clock = document.getElementById("clock");

    clock.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;

}

updateClock();

setInterval(updateClock,1000);