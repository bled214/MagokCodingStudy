/**
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/description/
 */

function solution(s1, s2) {
  // Split s1 and s2 into array of words elements
  let a = [...s1.split(' '), ...s2.split(' ')]
  // Find the word that appears only once 
  const obj = {};

  for (let i of a) {
    if (i in obj) {
      obj[i] += 1
    } else {
      obj[i] = 1
    }
  }

  a = [];

  for (let i in obj) {
    if (obj[i] == 1) {
      a.push(i)
    }
  }

  return a;
}