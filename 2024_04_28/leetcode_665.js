/**
 * https://leetcode.com/problems/non-decreasing-array/description/
 */

function solution(nums) {
  for (let i = 1, err = 0; i < nums.length; i++) {
    // 현재 요소가 이전 요소보다 작으면 (decreasing):
    if (nums[i] < nums[i - 1]) {
      if (
        // 일단 에러 카운트는 증가
        err++ ||
        (i > 1 && // 현재 요소가 배열의 첫번째 요소가 아니며,
          i < nums.length - 1 && // 마지막 요소도 아니며,
          nums[i - 2] > nums[i] && // 이전 요소가 현재 요소보다 크며,
          nums[i + 1] < nums[i - 1]) // 다음 요소가 이전 요소보다 작으면
      ) {
        return false; // in disallowed order
      }
    }
    return true; // in allowed order
  }
}

function solution2(nums) {
  let allowed = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      // 이전 요소가 현재 요소보다 크면 (decreasing):
      if (!allowed) return false;

      allowed = false;

      // 첫번째와 두번재 요소를 비교중이라면
      if (i === 1) {
        // 앞쪽 요소에 뒤쪽 요소를 할당
        nums[i - 1] = nums[i];
        // 비교중인 두 원소보다 앞의 값이 비교중인 두 원소 중 두번째 값보다 작거나 같다면
      } else if (i > 1 && nums[i - 2] <= nums[i]) {
        // 앞쪽 요소에 뒤쪽 요소를 할당
        nums[i - 1] = nums[i];
      } else {
        // 뒤쪽 요소에 앞쪽 요소를 할당
        nums[i] = nums[i - 1];
      }
    }
  }

  return true;
}
