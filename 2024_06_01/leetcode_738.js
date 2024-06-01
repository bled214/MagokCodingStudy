// https://leetcode.com/problems/monotone-increasing-digits/description/

function solution(n) {
  const str = String(n);
  const len = str.length;

  let increaseIndex = 0;
  let nineIndex = 0;

  // iterate over n:
  for (let i = 0; i < len; i++) {
    // ex. 1234 -> diff = 2 - 1
    const diff = str[i] - str[i - 1];

    if (diff === 0) continue;

    if (diff > 0) {
      increaseIndex = i;
    }

    if (diff < 0) {
      nineIndex = i;
      break;
    }
  }

  if (increaseIndex === nineIndex) {
    return n;
  }

  if (nineIndex === 0) {
    return n;
  }

  // return the largest number
  let result = '';

  for (let i = 0; i < len; i++) {
    if (i < nineIndex) {
      result += str[i];
    } else if (i === nineIndex) {
      result += '9';
    } else {
      result += '0';
    }
  }

  return Number(result);
}
