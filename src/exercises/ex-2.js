let duplicatedArray = [
    'bab',
    'aba',
    'abc',
    'bab',
    'abb',
    'baa',
    'bab',
];
export let uniqueArray = (duplicatedArray) => [
    ...new Set(duplicatedArray),
];
console.log(uniqueArray);
