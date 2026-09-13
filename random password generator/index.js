function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()_+-=~?"

    let included = "";
    let password = "";

    included += includeLowerCase ? lowerCaseChars : "";
    included += includeUpperCase ? upperCaseChars : "";
    included += includeSymbols ? symbols : "";
    included += includeNumbers ? numbers : "";

    console.log(included);

    if (length<=0) {
        return "password should be of atleast 1 length";
        
    }
    if (included.length === 0) {
        return "atleast 1 set of character should be included";
    }
    
    for(let i=0; i<length; i++){
        const random = Math.floor(Math.random()*included.length);
        password+=included[random];

    }

    return password;

}

const passwordLength = 20;
const includeLowerCase=true;
const includeUpperCase=true;
const includeSymbols=true;
const includeNumbers=true;

const password = generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);

console.log(password)