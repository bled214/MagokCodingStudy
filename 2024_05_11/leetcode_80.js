/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
 */

function solution(nums) {
  // special case (nums array has less than 3 elements)
  if (nums.length <= 2) {
    return nums.length;
  }

  // initialize k that updates the k-th index of the array.
  // only when the ucrrent element does not match either of the two previous indexes
  let k = 2;

  // iterate over the array
  for (let i = 2; i < nums.length; i++) {
    // if the current element does not match either of the two previous indexes
    if (nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]) {
      // update the k-th index
      nums[k++] = nums[i];
      k++;
    }
  }
  // return the index of the k-th element
  return k;
}
