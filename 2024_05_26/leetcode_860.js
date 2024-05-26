/**
 *https://leetcode.com/problems/lemonade-change/description/
 */

function lemonadeChange(bills) {
  // object with keys ($5, 10, 20) and values (0, 0, 0)
  const currentMoney = {
    5: 0,
    10: 0,
    20: 0,
  };

  // iterate over bills, for each bill check the value (5, 10, 20) and update currentMoney object accordingly
  for (let i = 0; i < bills.length; i++) {
    const currentBill = bills[i];

    switch (currentBill) {
      // if $5, increment currentMoney[5]
      case 5:
        currentMoney[5]++;
        break;

      //  if $10, if $5 is available, decrement $5 and increment $10
      case 10:
        if (currentMoney[5] === 0) {
          return false;
        }
        currentMoney[5]--;
        currentMoney[10]++;
        break;

      // if $20, if $10 and $5 are available, decrement $10 and $5 and increment $20
      case 20:
        if (currentMoney[10] > 0 && currentMoney[5] > 0) {
          currentMoney[10]--;
          currentMoney[5]--;
          currentMoney[20]++;
          // if $5 are 3, decrement $5 by 3 and increment $20
        } else if (currentMoney[5] >= 3) {
          currentMoney[5] -= 3;
          currentMoney[20]++;
        } else {
          return false;
        }
        break;
    }
  }

  return true;
}
