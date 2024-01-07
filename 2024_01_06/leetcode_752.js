/**
 * 자물쇠 4자리를 하나씩 돌려보면서 잠금 해제 숫자 조합 찾는 문제 (최소한의 try 횟수). 
 * 따라서 너비 우선 탐색.
 */
const openLock = (deadends, target) => {
  // deadends에 포함된 숫자를 만나면 무효화
  const blocked = new Set(deadends);
  const visited = new Set();

  if (blocked.has('0000')) return -1;
  visited.add('0000');

  // 큐 초기화 선언
  let queue = ['0000'];

  // 현재까지 시도 횟수
  let distance = 0;

  // 큐에 숫자가ㅏ 있는 동안 다음 로직 반복
  while (queue.length) {
    const nextQueue = [];

    for (const combination of queue) {
      // 목표 숫자와 일치하면 여태까지 시도 횟수 (distance) 반환 후 종료
      if (combination === target) return distance;

      // 
      for (let i = 0; i < combination.length; i++) {
        // 자물쇠를 위로 하나 올림 (단, 10이 될수는 없음)
        const up = (+combination[i] + 1) % 10;
        const nextUp = combination.slice(0, i) + up + combination.slice(i + 1);

        if (!visited.has(nextUp) && !blocked.has(nextUp)) {
          nextQueue.push(nextUp);
          visited.add(nextUp);
        }

        // 자물쇠를 아래로 하나 내림 (단, 10이 될수는 없음)
        const down = (+combination[i] + 9) % 10;
        const nextDown = combination.slice(0, i) + down + combination.slice(i + 1);

        if (!visited.has(nextDown) && !blocked.has(nextDown)) {
          nextQueue.push(nextDown);
          visited.add(nextDown);
        }
      }
    }

    // 횟수 하나 추가
    distance++;
    // 큐를 nextQueue로 갱신
    queue = nextQueue;
  }

  return -1;
};