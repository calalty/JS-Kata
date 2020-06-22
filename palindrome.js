/**
 CHALLENGE:
 Create a function that returns true if a number is a palindrome. 
 */

const isPalindrome = (word) => {
    let slicedString = word.split(""); // splitting the letters into an array
    let reverstedString = slicedString.reverse() // reversing the array of letters
    let joinedString =reverstedString.join(""); // joining the array of reversed letters
    console.log(joinedString); // logging the reversed word
    if (word === joinedString) { // original word is equal to the new word
        console.log('this word is a palindrome')
    } else {
        console.log("this word is not a palindrome")
    };
};
isPalindrome("dad");
isPalindrome("mum");
isPalindrome("dean");