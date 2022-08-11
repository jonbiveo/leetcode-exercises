/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let k = 1

  for(let i = 1; i < nums.length; i++) {
    if (nums[k - 1] != nums[i]) {
      k++
      nums[k - 1] = nums[i]
    }
  }

  return k

};
/**
 * for loop
 * nums = [1,1,2]
 * k = 1 (amount of unique elements. we know there will always be at least one unique element) 
 * 
 * 
 * 
 * 
 * [0,1,2,3,3,3,4,4]
 * k = nums[0] == 0
 * i = nums[1] == 1
 * 
 * k = [1] == 1
 * i = [2] == 2
 * 
 * k = [2] == 2
 * i = [3] == 3
 * 
 * k = [3] == 3
 * i = [4] == 3
 * 
 * k = [3] == 3
 * i = [5] == 3
 * 
 * k = [3] == 3
 * i = [6] == 4
 * 
 */