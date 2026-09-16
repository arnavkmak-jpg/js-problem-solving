const display = document.getElementById("display");

let startTime = 0; // time when stopwatch starts
let elapsedTime = 0; // time passed since stopwatch started
let timer = null;
let isRunning = false; 

function startWatch(){
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // current time - elapsed time
        timer = setInterval(updateWatch,10);
        isRunning = true;
    }
    
}

function stopWatch(){
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        
    }
}

function resetWatch(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function updateWatch(){
    const timeNow = Date.now()
    elapsedTime = timeNow - startTime;

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/(1000)%60);
    let miliseconds = Math.floor((elapsedTime%1000)/10);

    hours = hours.toString().padStart(2,0);
    minutes = minutes.toString().padStart(2,0);
    seconds = seconds.toString().padStart(2,0);
    miliseconds = miliseconds.toString().padStart(2,0);

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
}

