// Given an array of strings called words and an array of unique characters called license, find the shortest word in the words array that contains all the characters from the license array.
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
let filteredWords = [];
function findShortest(words, license) {
    words.forEach((word) => {
        if (word.includes(license[0]) && word.includes(license[1])) {
            filteredWords.push(word);
        }
    });
    const onlyShortest = filteredWords.reduce((a, b) => a.length <= b.length ? a : b);
    console.log('The shortes word from the list: ' + onlyShortest);
}
// findShortest(words, license)
const duplicatedArray = [
    'bab',
    'aba',
    'abc',
    'bab',
    'abb',
    'baa',
    'bab',
];
function getUniqueValues(arrayToFilter) {
    let filteredArray = Array.from(new Set(arrayToFilter));
    return filteredArray;
}
console.log(getUniqueValues(duplicatedArray));
export {};
