// Problem 1: Reverse a String
function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
}
// reverseString("hello")

// /---------------------------------------------------/;

// Problem 2: Count Vowels in a String
function countVowels(text) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) count++;
  }
  return count;
}
// countVowels("programming")

// /---------------------------------------------------/;

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

// isPalindrome("madam");
// isPalindrome("hello");

// /---------------------------------------------------/;

// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// findMax([5, 1, 9, 3]); 

// /---------------------------------------------------/;

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

// removeDuplicates([1, 2, 2, 3, 4, 4]);

// /---------------------------------------------------/;


