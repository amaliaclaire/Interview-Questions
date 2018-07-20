// Write a function that takes a range of numbers from 1 to N. Sum every number divisible by M. Both N and M must be a number that is greater than 1.

// Example

// Input:
// N = 8, M = 3

// Output:
// 3 and 6 are divisible by 3. 3 + 6 = 9

// Input:
// N = 14, M = 7

// Output:
// 7 and 14 are divisible by 7. 7 + 14 = 21


function range (n, m) {
  let total = 0;

  // loop to see how many numbers there are. with the num.length

  for (let i = 0; i < n.length; i++) {
    console.log('HELLO')
  }


  return total
}

range(8, 3)
// result should be 9

// n is total (8)
// how many numbers (not leftover so moduler) can be divisible?
// from there add the numbers that are remainding and add
//  from the num.length do a modular and see what can be divisible (what numbers come out)
// with the numbers that CAN be divisible add them together
// return the total
