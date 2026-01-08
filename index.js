// Problem 1: Reverse a String
function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
}
// reverseString("hello")
/---------------------------------------------------/
// Problem 2: Count Vowels in a String
const countVowels = (text){
    let count =0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i<text.length; i++){
        if(vowels.includes(text[i]))
        count++;
    }
    return count;
}
// countVowels("programming")
/---------------------------------------------------/
