const min = 1;
const max = 100;
const sol = Math.floor(Math.random()*(max-min+1)+min);

let running = true;
let guess;
let attempts = 0;

while (running) {
    guess = window.prompt(`Guess a number between ${min} - ${max}`); 
    guess = Number(guess);
    
    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if(guess>max || guess<min){
        window.alert("Please enter a valid number");
    }
    else {
        attempts++;
        if (guess>sol) {
            window.alert("The number is too High");
            
        }
        else if (guess<sol) {
            window.alert("The number is too Low");
            
        }
        else {
            window.alert(`Congratulations ${guess} is the correct answer, it took you ${attempts} attempts`)
        }
    }
    
}