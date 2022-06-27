/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

const markMassOne = 78;
const markHeightOne = 1.69;

const johnMassOne = 92;
const johnHeightOne = 1.95;

let markHigherBMI = false;

markBMIOne = Math.round((markMassOne / markHeightOne ** 2) * 10) / 10;
johnBMIOne = Math.round((johnMassOne / johnHeightOne ** 2) * 10) / 10;

if (markBMIOne > johnBMIOne) {
    markHigherBMIOne = true;
    console.log(`Marks BMI of ${markBMIOne} is higher than Johns BMI of ${johnBMIOne}`);
} else {
    console.log(`Marks BMI of ${markBMIOne} is lower than Johns BMI of ${johnBMIOne}`);
}


const markMassTwo = 95;
const markHeightTwo = 1.88;

const johnMassTwo = 85;
const johnHeightTwo = 1.76;

let markHigherBMITwo = false;

markBMITwo = Math.round((markMassTwo / markHeightTwo ** 2) * 10) / 10;
johnBMITwo = Math.round((johnMassTwo / johnHeightTwo ** 2) * 10) / 10;

if (markBMITwo > johnBMITwo) {
    markHigherBMITwo = true;
    console.log(`Marks BMI of ${markBMITwo} is higher than Johns BMI of ${johnBMITwo}`);
} else {
    console.log(`Marks BMI of ${markBMITwo} is lower than Johns BMI of ${johnBMITwo}`);
}