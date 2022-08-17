/**
* @param {number[]} nums
* @return {boolean}
*/

var containsDuplicate = function(nums) {

  const numberMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (numberMap.has(nums[i])) {
      return true
    } else {
      numberMap.set(nums[i])
    }
  }
  return false
};