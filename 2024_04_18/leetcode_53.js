/**
 * https://leetcode.com/problems/maximum-subarray/description/
 */

function solution(nums) {
  // max sum
  let result = nums[0]

  for (let i = 0; i < nums.length; i++) {
    // i번째 subarray 요소들의 합 중 제일 큰 값
    nums[i] = Math.max(0, nums[i - 1]) + nums[i]

    // 최대값 갱신
    if (nums[i] > result) {
      result = nums[i]
    }
  }
  return result
}