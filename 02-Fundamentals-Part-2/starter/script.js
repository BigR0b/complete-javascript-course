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
const friends = [ 'Michael', 'Steven', 'Peter' ];

//Add elements
/*const newLength = friends.push('Jay'); //add to end
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
}*/

// Dot vs. Bracket Notation
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn =  prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas);

// Challenge 
//"Jonas has 3 friends, and his best friend is call Michael"

console.log(`${jonas['firstName']} has ${jonas['friends'].length} friends, and his best friend is called ${jonas['friends'][0]}`); */

const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYear: 1991,
	job: 'teacher',
	friends: [ 'Michael', 'Peter', 'Steven' ],
	hasDriversLicense: true,

    calcAge: function(){
        return 2037 - this.birthYear;
    },

	getSummary: function(){
		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and has ${this.hasDriversLicense ? 'a': 'no'} driver's license`;
	}
};

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
console.log();

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"

console.log(jonas.getSummary());
