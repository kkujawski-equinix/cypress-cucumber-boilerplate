/// POPULAR CODING INTERVIEW QUESTIONS:

// 1. Write a function that takes a number n. For each number from 1 to n, print "Fizz" if the number is divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both 3 and 5. For numbers not divisible by either, print the number itself.

// function fizzerBuzzerPrinter(n: number) {
//   const f: string = 'Fizz';
//   const b: string = 'Buzz';

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       console.log(f);
//     } else if (i % 5 === 0) {
//       console.log(b);
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log(f + b);
//     } else if (i % 3 !== 0 && i % 5 !== 0) {
//       console.log(i);
//     }
//   }
// }

// fizzerBuzzerPrinter(30);

// function fizzBuzzWithTwist(n: number): void {
//   for (let i = 1; i <= n; i++) {
//     let output = '';

//     if (i % 3 === 0) {
//       output += 'Fizzer';
//     }

//     if (i % 5 === 0) {
//       output += 'Buzzer';
//     }

//     if (output === '') {
//       output = i.toString();
//     }

//     console.log(output);
//   }
// }

// const n = 15; // Change this to the desired number
// fizzBuzzWithTwist(n);
