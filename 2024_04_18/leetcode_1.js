/**
 * https://leetcode.com/problems/two-sum/description/
 */

const input = [1, 2, 3, 6]

const target = 5

// 2중 for 문으로 풀이 (time complexity O(n^2))
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === target) {
      console.log([i, j])
    }
  }
}

/**
 * @param {number[]} input
 * @param {number} target
 * @return {number[]}
 */
function solution(input, target) {
  // Map 객체 생성 (Map: key, value 쌍을 저장)
  let mp = new Map()

  for (let i = 0; i < input.length; i++) {
    // target - input[i] = diff
    let diff = target - input[i]

    // 목표 diff가 존재하면
    if (mp.has(diff)) {
      // 해당 값의 index를 반환
      return [mp.get(diff), i]
    }

    mp.set(input[i], i)
  }
}