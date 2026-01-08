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

// Problem 6: Sum of All Numbers in an Array

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// sumArray([1, 2, 3, 4])

// /---------------------------------------------------/;

// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

// findEvenNumbers([1, 2, 3, 4, 5, 6]);

// /---------------------------------------------------/;

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(text) {
  let words = text.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    result.push(word);
  }
  return result.join(" ");
}

// capitalizeWords("hello world");

// /---------------------------------------------------/;

// Problem 9: Find the Factorial of a Number
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// factorial(5);

// /---------------------------------------------------/;

// Problem 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

// pingPong();
