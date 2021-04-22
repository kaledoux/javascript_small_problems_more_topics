function wordLengths(string) {
  if (string === undefined || string.length < 1) { return [] };
  // create word lengths object
  let wordCounts = {};
  string.split(' ').forEach(word => {
    wordCounts[word] = word.length;
  });
  // array of object key value
  let countArray = Object.keys(wordCounts).map(word => {
    return `${word} ${wordCounts[word]}`
  });

  return countArray;
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
