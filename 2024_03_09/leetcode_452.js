// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/

/**
 * @param {number[][]} points 풍선의 길이
 * @return {number} 필요 화살 개수
 */
var findMinArrowShots = function (points) {
  // 풍선을 순서대로 정렬
  const p = points.sort((a, b) => a[0] - b[0])
  // 필요 화살 배열
  let stack = []

  for (let range of p) {
    const slen = stack.length
    // 현재 요소의 끝 지점 vs 시작 지점 비교 ->끝 지점이 시작지점보다 크거나 같다ㅏ면,
    if (slen > 0 && stack[slen - 1][1] >= range[0]) {
      const topStack = stack.pop()
      const lastStartPoint = topStack[0]
      const lastEndPoint = topStack[1]
      // 스택에 신규 값을 넣어줌. 신규 값은 [시작점 중 더 큰 값, 끝지점 중 더 작은값]
      stack.push([Math.max(range[0], lastStartPoint), Math.min(range[1], lastEndPoint)])

    } else {
      // range를 스택에 추가
      stack.push([range[0], range[1]])
    }

  }
  // 스택의 크기  = 화살 개수
  return stack.length
};