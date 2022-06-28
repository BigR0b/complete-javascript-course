'use strict';

/* let hasDriversLicense = false;
const pastTest = true;

if (pastTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive'); */

// const interface = 'Audio';
// const private = 534;

// Intro to arrays
/*const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay'
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = (birthYear) => {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);*/

// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter',];

//Add elements
const newLength = friends.push('Jay'); //add to end
console.log(friends);
console.log(newLength);

friends.unshift('John'); // add to start
console.log(friends);

//Remove elements
const popped = friends.pop(); //removes last
console.log(popped);
console.log(friends);

friends.shift(); //removes first
console.log(friends);

console.log(friends.indexOf('Steven')); //shows when in the array the element is
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));// returns true if the element is in the array
console.log(friends.includes('Bob'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}