'use strict';
// Challenge 2

const calcTip = (bill) => {
    if (bill >= 50 && bill <=300) {
        return bill * .15;
    }else{
        return bill * .2;
    }
}

calcTip(100);

const firstBills = [125, 555, 44];
const firstTips = [calcTip(firstBills[0]), calcTip(firstBills[1]), calcTip(firstBills[2])];
const total = [firstBills[0] + firstTips[0], firstBills[1] + firstTips[1], firstBills[2] + firstTips[2]]

console.log(firstBills);
console.log(firstTips);
console.log(total);

// Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(i));
    totals.push(bills[i] + tips[i]);
}

let sum = 0

const calcAverage = arr => {
    for (let i = 0; i < arr.length; i++) {
        sum += totals[i]
    }
    return sum / arr.length;
}
console.log(calcAverage(totals));