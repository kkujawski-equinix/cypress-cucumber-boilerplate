/*
Given an array of numbers and a target sum, write a function that finds two numbers
 in the array that add up to the target sum. Return their indices.
*/
let arrayOfNumbers = [2, 6, 19, 22, 10, 5, 3, 1];
let targetSum = 9;
const findNumberToGetSum = (numbers, sum) => {
    numbers.forEach((number) => {
        console.log(numbers.indexOf(number) + ' : ' + number);
    });
    for (let i = 0; i <= numbers.length; i++) {
        const complement = target - nums[i];
        // if () {
        // }
    }
};
findNumberToGetSum(arrayOfNumbers, targetSum);
