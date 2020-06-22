/*
CHALLENGE:
Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

HackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

HackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

HackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

*/

let input = "javascript is cool"
let output = ""

    for (x = 0; x < input.length; x++) {
        if (input[x] == "a"){
            output += "4"
        } else if (input[x] == "e"){
            output += "3"
        } else if (input[x] == "i"){
            output += "1"
        } else if (input[x] == "o"){
            output += "0"
        } else if (input[x] == "s"){
            output += "5"
        } else {
            output += input[x]
        }
    }


console.log(output)
