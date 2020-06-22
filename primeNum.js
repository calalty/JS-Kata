/*
CHALLENGE:
Create a function that outputs true if a number is prime, and false otherwise
A prime number has no other factors except 1 and itself.
1 is not considered a prime number.
*/

const isPrime = (num) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) {
        return false
      }
    return num > 1
  }

console.log(isPrime(17))