/**
 * 연속적으로 나열되어 있는 배열의 숫자 요소들의 합이 최대가 되는 부분 배열찾는 문제
 * 
 * Given an integer array nums, find the subarray
 with the largest sum, and return its sum.

- Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

- Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

- Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 */

function maxSubArray(nums) {
  let max = -Infinity; // 최대값
  let sum = 0; // 합

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; // 누적합을 구한다
    max = Math.max(max, sum); // max와 누적합을 비교
    if (sum < 0) sum = 0; // 누적합가 0이다면 누적합을 0으로 만듭니다
  }

  return max; // 최대값을 리턴
}
