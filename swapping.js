let input;
do {
    input = prompt("Enter a number of at least 3 digits:");
} while (isNaN(input) || input.length < 3); // Ensure the input is numeric and has at least 3 digits

let digits = input.split(''); // Split the number into an array of digits
let temp = digits[1]; // Store the second digit temporarily
digits[1] = digits[digits.length - 1]; // Swap the second digit with the last digit
digits[digits.length - 1] = temp; // Assign the stored digit to the last position
let newNumber = parseInt(digits.join('')); // Convert the modified array back to a number

console.log("Original number: " + input + " New number: " + newNumber); // Output the result