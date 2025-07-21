// index.js

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

// function isPalindrome(str) {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

module.exports = {
  capitalize,
  reverse,
  // isPalindrome
};
