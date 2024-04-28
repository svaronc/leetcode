/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//? Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = function (nums, target) {
  let mapOfNumbers = {}
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]
      if (complement in mapOfNumbers) {
          return [mapOfNumbers[complement], i]
      }
      mapOfNumbers[nums[i]] = i
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

//* we create an object to store the numbers and their index. We loop through the array and check if the complement of the number is in the object or not. If it is then we return the index of the complement and the current index. If it is not then we store the number and its index in the object. This way we can find the two numbers that add up to the target.

// time complexity is O(n) and space complexity is O(n) where n is the length of the array.
