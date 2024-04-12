
let number = prompt("Enter a number of at least 3 digits:");


if (number.length < 3) {
    alert("Please enter a number with at least 3 digits.");
} else {
    
    let digits = number.split('');

    
    for (let i = 0; i < digits.length; i++) {
        if (i === 1) {
            let temp = digits[i];
            digits[i] = digits[digits.length - 1];
            digits[digits.length - 1] = temp;
            break; 
        }
    }
    
    let newNumber = parseInt(digits.join(''));

    console.log("Original number: " + number + " New number: " + newNumber);
}