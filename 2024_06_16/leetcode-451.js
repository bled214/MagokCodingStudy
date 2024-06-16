// https://leetcode.com/problems/sort-characters-by-frequency/description/

/**
 * 
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.
 */

var frequencySort = function (s) {
  // Initialize counter
  const counter = new Map();

  // Iterate over s
  for (const char of s) {
    // save char(key) and it cumulative frequency(value) in counter
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  // make an array from counter
  const pq = Array.from(counter.entries());
  // sort the array based on frequency
  pq.sort((a, b) => b[1] - a[1]);

  let result = '';
  // iterate over the array
  for (const [char, freq] of pq) {
    // the result is a string with char repeated freq times
    result += char.repeat(freq);
  }

  return result;
};
