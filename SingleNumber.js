/**
* @param {number[]} nums
* @return {number}
*/
var singleNumber = function(nums) {

  let result = 0

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
};

/**
 * 
 *  XOR bitwise operation
 * 
 * input array = [1,2,1,2,4]
 * 
 * XOR of any two same numbers is always zero
 * 0^0 = 0
 * 
 * at end of loop
 * result = 1^1,2^2,4
 * result = 0^0^4
 * result = 4
 * 
 */