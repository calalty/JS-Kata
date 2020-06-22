/*
CHALLENGE:
Create a function that returns true if a string contains any spaces.
An empty string does not contain any spaces.
Don't forget to return the result.
*/

const stringSpace = (string) => {
    if (string.includes(" ")) {
        return true
    }
    else {
        return false
    }
}


console.log(stringSpace("heythere"))

