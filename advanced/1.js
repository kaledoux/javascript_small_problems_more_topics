// goal:
//   - create a template that can be used for madlibs, and a function that will display text based
//     on the template
// input:
//   - template (string)
// output:
//   - string with madlibs words replaced
// Rules/Reqs:
//   - template should be a multi line template literal with interpolated variables
//     `The ${noun} ${verb} ${adverb} all the way to the ${noun}`
//   - output should supply valid words from a bank of possible choices (arrays)
// Test Cases:
// let template1 = `The ${adjective} ${noun} ${verb} ${adverb}`;
// console.log(madLibs(template1));
// let template2 = `The ${adjective} ${noun} ${adverb} ${verb}`;
// console.log(madLibs(template1));
// 
// Data Structures:
//   - template literal
//   - arrays of verbs, nouns, adverbs, and adjectives
//   - local variables to hold the noun, adverb, verb, adjective
// 
// General Approach
//   - given a template literal 
//   - generate a list of different choices for each word type
//   - select one of each and assign to a local variable that matches the variable in template
//   - output template
// 
// Algorithm:
//   - set nouns = ['chair', 'desk', 'lamp', 'dog', 'bird']
//         verbs = ['drives','flies', 'speaks', 'licks', 'eats']
//         adverbs = ['smoothly', 'slowly', 'loudly', 'quickly', 'noisily']
//         adjectives = ['fat', 'fast', 'sad', 'old', 'carefree']
//   - find random array value
//     * subprocess *
//   - set noun to nouns[getRandom]
//         verb to verbs[getRandom]
//         adverb to adverbs[getRandom]
//         adjective to adjectives[getRandom]
//   - log template
//   - getRandom(min, max)
//     - return Math.random() * (max - min) + min

function getRandom(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

function madLibs(template) {
  const nouns = ['chair', 'desk', 'lamp', 'dog', 'bird'];
  const verbs = ['drives','flies', 'speaks', 'licks', 'eats'];
  const adverbs = ['smoothly', 'slowly', 'loudly', 'quickly', 'noisily'];
  const adjectives = ['fat', 'fast', 'sad', 'old', 'carefree'];

  let  noun = nouns[getRandom(0, nouns.length)]
  let  verb = verbs[getRandom(0, verbs.length)]
  let  adverb = adverbs[getRandom(0, adverbs.length)]
  let  adjective = adjectives[getRandom(0, adjectives.length)]

  let libs = template;
  libs = libs.replace(/\${noun}/, noun);
  libs = libs.replace(/\${verb}/, verb);
  libs = libs.replace(/\${adjective}/, adjective);
  libs = libs.replace(/\${adverb}/, adverb);

  return libs;
}


let template1 = 'The ${adjective} ${noun} ${verb} ${adverb}';
console.log(madLibs(template1));
let template2 = 'The ${adjective} ${noun} ${adverb} ${verb}';
console.log(madLibs(template2));
