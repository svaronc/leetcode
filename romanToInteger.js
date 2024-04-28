/**
 * @param {string} s
 * @return {number}
 */

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
*/
const romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let resultNumber = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
      resultNumber -= romanNumerals[s[i]];
    } else {
      resultNumber += romanNumerals[s[i]];
    }
  }
  return resultNumber;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));

// time complexity is O(n) and space complexity is O(1) where n is the length of the string.
// we create an object to store the roman numerals and their values. Then we loop through the string and check if the current roman numeral is less than the next one or not. If it is then we subtract it from the result number else we add it to the result number. This way we can convert the roman numeral to integer.
