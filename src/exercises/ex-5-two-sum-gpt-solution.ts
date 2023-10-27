/* 
Given an array of numbers and a target sum, write a function that finds two numbers
 in the array that add up to the target sum. Return their indices.
*/

const nums = [0, 8, 3, 7, 2, 7, 11, 15];
const target = 9;

function twoSum(nums: number[], target: number): number[] | null {
  const numToIndexMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log('Complement : ', complement);

    if (numToIndexMap.has(complement)) {
      console.log('Ma Complement! : ', complement);

      console.log('Mapa: ', numToIndexMap.get(complement)!);
      return [numToIndexMap.get(complement)!, i];
    }
    console.log(complement);
    numToIndexMap.set(nums[i], i);
    console.log(numToIndexMap);
  }

  return null; // If no solution is found
}

const result = twoSum(nums, target);

if (result !== null) {
  console.log(
    `Indices of the two numbers that add up to ${target}: [${result[0]}, ${result[1]}]`
  );
} else {
  console.log(`No solution found for target sum ${target}`);
}
