/*
Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.

Only change ending punctuation - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
Don't worry about mixed punctuation (no cases that end in something like ?!??!).
Keep sentences that do not have question/exclamation marks the same.

Example:

NoYelling("What went wrong?????????") ➞ "What went wrong?"

*/

let sentence = "OI???"
let i = sentence.length - 1;
while(sentence[i] == "!") {
    i--;
}

while(sentence[i] == "?") {
    i--;
}


finalSentence = sentence.substring(0, i+2)
console.log(finalSentence)





