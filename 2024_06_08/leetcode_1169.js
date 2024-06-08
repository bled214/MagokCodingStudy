// https://leetcode.com/problems/invalid-transactions/description/
// Ex. Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// Output: ["alice,20,800,mtv","alice,50,100,beijing"]
// 금액이 1000 이상이거나, 또는 동일 인물이 60분 이내에 다른 도시에서 발생한다면 -> 이상 거래

function solution(transactions) {
  // result (invalidTransactions): []
  const invalidTransactions = [];

  // iterate over transactions and reorder them by name:
  for (let i = 0; i < transactions.length; i++) {
    const [name, time, amount, city] = transactions[i].split(',');

    // if amount is greater than 1000
    if (amount > 1000) {
      // push it to invalidTransactions
      invalidTransactions.push(transactions[i]);
    }

    // if the same name exists, compare their time. if time difference is less than 60, push it to invalidTransactions
    for (let j = i + 1; j < transactions.length; j++) {
      const [name2, time2, amount2, city2] = transactions[j].split(',');

      if (name === name2) {
        const timeDiff = Math.abs(parseInt(time) - parseInt(time2));

        if (timeDiff < 60) {
          invalidTransactions.push(transactions[j]);
        }
      }
    }
  }
  return invalidTransactions;
}
