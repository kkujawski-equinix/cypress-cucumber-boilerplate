const wordToCheck = 'mama';

let isPalindrome = (str: string): boolean => {
  return str.split('').reverse().join() === str ? true : false;
};

console.log(`Is "${wordToCheck}" palindrome? :`, isPalindrome(wordToCheck));
