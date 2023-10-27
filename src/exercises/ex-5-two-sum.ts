/* 
Given an array of numbers and a target sum, write a function that finds two numbers
 in the array that add up to the target sum. Return their indices.
*/

let arrayOfNumbers: number[] = [2, 6, 19, 22, 10, 5, 3, 1];
let targetSum: number = 9;

const findNumberToGetSum = (
  numbers: number[],
  sum: number
): number[] | null => {
  const numbersToIndexMap = new Map<number, number>();

  numbers.forEach((number) => {
    console.log(numbers.indexOf(number) + ' : ' + number);
  });

  for (let i = 0; i < numbers.length; i++) {
    const complement = targetSum - numbers[i];

    if (numbersToIndexMap.has(complement)) {
      return [numbersToIndexMap.get(complement)!, i];
    }

    numbersToIndexMap.set(numbers[i], i);
  }

  return null; // If no solution is found
};

const searchingResult = findNumberToGetSum(arrayOfNumbers, targetSum);

if (searchingResult !== null) {
  console.log(
    `Indices of the two numbers that add up to ${targetSum}: [${searchingResult[0]}, ${searchingResult[1]}]`
  );
} else {
  console.log(`No solution found for target sum ${targetSum}`);
}
