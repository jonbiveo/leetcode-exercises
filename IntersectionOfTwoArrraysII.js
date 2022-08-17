/**
* @param {number[]} nums1
* @param {number[]} nums2
* @return {number[]}
*/

var intersect = function(nums1, nums2) {

  const numbersMap = new Map()
  const result = new Array()

  if (nums1.length >= nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      numbersMap.set(nums1[i], numbersMap.get(nums1[i]) + 1 || 1 )
    }
    for (let i = 0; i < nums2.length; i++) {
      if (numbersMap.has(nums2[i]) && numbersMap.get(nums2[i]) > 0) {
        numbersMap.set(nums2[i], numbersMap.get(nums2[i]) - 1)
        result.push(nums2[i])
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      numbersMap.set(nums2[i], numbersMap.get(nums2[i]) + 1 || 1 )
    }
    for (let i = 0; i < nums1.length; i++) {
      if (numbersMap.has(nums1[i]) && numbersMap.get(nums1[i]) > 0) {
        numbersMap.set(nums1[i], numbersMap.get(nums1[i]) - 1)
        result.push(nums1[i])
      }
    }
  }
  return result
};