/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
  }
  return arr
};

var rotate = function(nums, k) {
    k = k % nums.length
  nums = reverse(nums, 0, nums.length - 1)
  nums = reverse(nums, 0, k - 1)
  nums = reverse(nums, k, nums.length - 1)
  return nums
};

/**
 * 
 * 4,2,3,1
 * 1 3
 * 4,3,2,1
 * 2,2
 * 4,3,2,1
 * 3,4,2,1
 * 3,4,1,2
 * 
 * k = 3
 * 1,2,3,4
 * 4,3,2,1
 * 
 * 2,3,4,1
 * 
 * 
 * array length = 11
 * k = 8
 * 
 * [4,5,6,7,8,9,10,11,1,2,3]
 * 
 */