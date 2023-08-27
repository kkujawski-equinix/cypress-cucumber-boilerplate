// Given an array of strings called words and an array of unique characters called license, find the shortest word in the words array that contains all the characters from the license array.

// # Sample words array
// words = [
//   'bat', 'act', 'cat', 'pat', 'patty', 'caterpillar', 'table', 'garden',
//   'symphony'
// ]

// # Sample license array
// license = ['a', 'c']
// """
// ans: "act"
// Words that consist characters from license array are
// ["cat", "act", "caterpillar"] and the shortest word is "act"
// """

import { uniqueArray } from '../exercises/ex-2';

const words = [
  'bat',
  'act',
  'cat',
  'pat',
  'patty',
  'caterpillar',
  'table',
  'garden',
  'symphony',
  'apac',
];

const license = ['a', 'c'];
let filteredWords: string[] = [];

function findShortest(words: string[], license: string[]) {
  words.forEach((word) => {
    if (word.includes(license[0]) && word.includes(license[1])) {
      filteredWords.push(word);
    }
  });
  const onlyShortest = filteredWords.reduce((a, b) =>
    a.length <= b.length ? a : b
  );
  console.log('The shortes word from the list: ' + onlyShortest);
}

// findShortest(words, license)

const duplicatedArray: string[] = [
  'bab',
  'aba',
  'abc',
  'bab',
  'abb',
  'baa',
  'bab',
];

function getUniqueValues(arrayToFilter: string[]): string[] {
  let filteredArray = Array.from(new Set(arrayToFilter));
  return filteredArray;
}

console.log(getUniqueValues(duplicatedArray));
