/**
 * https://leetcode.com/problems/rotting-oranges/description/
 * 썩은 오렌지 문제  (탐색)
 * 
 * You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 */

const FRESH = 1;
const ROTTEN = 2;
const EMPTY = 0;

var orangesRotting = function (grid) {
  // FRESH하지 않다면 return 0
  if (!hasFresh(grid)) return 0;

  const visited = new Set();
  let hasRotten = findRotten(grid, visited);
  let steps = -1;

  // hasRotten 큐에 값이 있는한 (while q:)
  while (hasRotten.length !== 0) {
    // 큐에 for 문으로
    for (let i = 0; i < hasRotten.length; i++) {
      let [x, y] = hasRotten[i].split("-");
      x = parseInt(x);
      y = parseInt(y);

      // 상하좌우 ROTTEN 하게 만듦
      makeitRotten(grid, x + 1, y);
      makeitRotten(grid, x - 1, y);
      makeitRotten(grid, x, y + 1);
      makeitRotten(grid, x, y - 1);
    }

    // steps에 1 추가
    steps++;
    // ROTTEN 오렌지 리스트 배열을 hasRotten 변수에 저장
    hasRotten = findRotten(grid, visited);
  }

  // FRESH라면 -1 return, FRESH 아니라면 steps를 리턴
  return hasFresh(grid) ? -1 : steps;
};

const findRotten = (grid, visited) => {
  const result = [];
  // 모든 셀을 방문하면서
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const position = i + "-" + j;
      // 해당 셀이 ROTTEN이고, 첫 방문이라면
      if (grid[i][j] === ROTTEN && !visited.has(position)) {
        // 방문 처리
        visited.add(position);
        // result 배열에 해당 셀을 추가
        result.push(i + "-" + j);
      }
    }
  }
  return result;
};

const makeitRotten = (grid, x, y) => {
  // undefined이거나 EMPTY인 셀인 경우, early return
  if (grid[x] === undefined || grid[x][y] === undefined || grid[x][y] === EMPTY)
    return;
  // 그 외의 경우, 해당 셀의 오렌지를 썩게 함
  grid[x][y] = ROTTEN;
};

const hasFresh = (grid) => {
  // 모든 셀을 방문하면서
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // FRESH한 오렌지라면 true 반환
      if (grid[i][j] === FRESH) return true;
    }
  }
  return false;
};