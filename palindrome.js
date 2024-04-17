// Prompt the user to enter a word and convert it to lowercase
let word = prompt("Enter a word:").toLowerCase();

// Initialize variables to track the start and end indices of the word
let start = 0;
let end = word.length - 1;

// Initialize a boolean variable to determine if the word is a palindrome
let isPalindrome = true;

// Iterate through the characters of the word from both ends towards the middle
while (start < end) {
    // Check if the characters at the start and end indices are different
    if (word[start] !== word[end]) {
        // If they are different, the word is not a palindrome
        isPalindrome = false;
        // Exit the loop early since we already determined it's not a palindrome
        break;
    }
    
    // Move towards the middle of the word
    start++;
    end--;
}

// Check if the word is a palindrome based on the boolean flag
if (isPalindrome) {
    // If it is a palindrome, log a message indicating so
    console.log("'" + word + "' is a palindrome.");
} else {
    // If it's not a palindrome, log a message indicating so
    console.log("'" + word + "' is not a palindrome.");
}