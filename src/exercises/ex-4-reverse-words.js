const wordsToReverse = 'Hello Beautiful World';
let reverseWords = (words) => {
    let reversedWords;
    reversedWords = wordsToReverse.split(' ').reverse().join(' ');
    return reversedWords;
};
console.log('Original: ', wordsToReverse);
console.log('Reversed: ', reverseWords(wordsToReverse));
