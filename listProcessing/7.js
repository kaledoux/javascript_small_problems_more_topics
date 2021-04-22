
function leadingSubstrings(string) {
  return string.split('').map((char, ind, array) => array.slice(0, ind + 1).join(''));
}

function substrings(string) {
  return [...string].map((char, ind, arr) => leadingSubstrings(arr.slice(ind, arr.length).join('')))
                    .flat();
}

function isPalindrome(string) {
  if (string.length < 2) { return false };
  return (string === [...string].reverse().join('')) ? true : false;
}

function palindromes(string) {
  return substrings(string).filter(word => isPalindrome(word));
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
