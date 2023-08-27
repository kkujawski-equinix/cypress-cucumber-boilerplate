let duplicatedArray: string[] = [
  'bab',
  'aba',
  'abc',
  'bab',
  'abb',
  'baa',
  'bab',
];

export let uniqueArray = (duplicatedArray: string[]) => [
  ...new Set(duplicatedArray),
];

console.log(uniqueArray);
