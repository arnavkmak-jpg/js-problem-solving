const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const mySubscribed = document.getElementById("mySubscribed");
const paymentDone = document.getElementById("paymentDone");

mySubmit.onclick = function(){
    if (myCheckbox.checked) {
        mySubscribed.textContent = `You are subscribed!`
    }
    else{
        mySubscribed.textContent = `You are not subscribed!`
    }

    if (visaBtn.checked) {
        paymentDone.textContent = `You are paying through Visa`
        
    }
    else if (masterBtn.checked) {
        paymentDone.textContent = `You are paying through Master Card`
        
    }
    else if (paypalBtn.checked){
        paymentDone.textContent = `You are paying through PayPal`
        
    }
    else{
        paymentDone.textContent = `Please select a payment method`
    }
}

