let word = prompt("Enter a word:").toLowerCase();

let start = 0;
let end = word.length - 1;
let isPalindrome = true;

while (start < end) {
   
    if (word[start] !== word[end]) {
        isPalindrome = false;
        break; 
    }
    
    start++;
    end--;
}


if (isPalindrome) {
    console.log("'" + word + "' is a palindrome.");
} else {
    console.log("'" + word + "' is not a palindrome.");
}