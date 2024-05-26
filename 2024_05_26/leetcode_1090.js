/**
 https://leetcode.com/problems/largest-values-from-labels/description/
 */

// Ex1
//  values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1
//  subset(s) <= numWanted
// subset has 1 identical element
// Return the maximum score of subset(s)

function solution(values, labels, numWanted, useLimit) {
  const map = {};
  let res = 0;
  let acc = 0;

  const mapper = values
    .map((value, i) => ({
      val: value,
      label: labels[i],
    }))
    .sort((a, b) => b.val - a.val);

  for (let i = 0; i < mapper.length; i++) {
    map[mapper[i].label] = 0;
  }

  for (let i = 0; i < mapper.length; i++) {
    const { label, val } = mapper[i];
    if (acc < numWanted && map[label] < useLimit) {
      res += val;
      map[label] = (map[label] || 0) + 1;
      acc++;
    }
  }

  return res;
}
