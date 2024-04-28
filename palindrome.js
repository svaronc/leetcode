/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function (x) {
  let reverseNumber = x.toString().split('').reverse().join('');
  if (Number(reverseNumber) === x) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

// we need to check if the number is palindrome so what we do is first convert to string and then split it and reverse it and join it and then convert it to number and then check if it is equal to the original number or not. If it is then return true else return false. so this way we know that the number is the same if we readed from left to right or right to left.

//time complexity is O(n) and space complexity is O(n) where n is the length of the number.