'use strict';
// Functions
function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry('United States', 333000000, 'Washington');
const country2 = describeCountry('Canada', 38000000, 'Ottawa');
const country3 = describeCountry('Mexico', 128000000, 'Mexico City');

console.log(country1);
console.log(country2);
console.log(country3);

// Function Declarations vs. Expressions
// Function Declaration
function percentageOfWorld1(population) {
	return population / 7900000000 * 100;
}

const pop1 = percentageOfWorld1(333000000);
const pop2 = percentageOfWorld1(38000000);
const pop3 = percentageOfWorld1(128000000);
console.log(pop1, pop2, pop3);

// Function Expression
const percentageOfWorld2 = function(population) {
	return population / 7900000000 * 100;
};
const pop4 = percentageOfWorld2(333000000);
const pop5 = percentageOfWorld2(38000000);
const pop6 = percentageOfWorld2(128000000);
console.log(pop4, pop5, pop6);

// Arrow Functions
const percentageOfWorld3 = (population) => population / 7900000000 * 100;

const pop7 = percentageOfWorld3(333000000);
const pop8 = percentageOfWorld3(38000000);
const pop9 = percentageOfWorld3(128000000);
console.log(pop4, pop5, pop6);

// Functions Calling Other Functions

const describePopulation = (country, population) => {
	const percentPop = percentageOfWorld1(population);
	return `${country} has ${population} people, which is about ${percentPop} of the world.`;
};

const descPop1 = describePopulation('United States', 333000000);
const descPop2 = describePopulation('Canada', 38000000);
const descPop3 = describePopulation('Mexico', 128000000);

console.log(descPop1, descPop2, descPop3);

// Introduction to Arrays
const populations = [ 330000000, 30000000, 128000000, 1390000000 ];

if (populations.length === 4) {
	console.log(true);
} else {
	console.log(false);
}

const percentages = [
	percentageOfWorld1(populations[0]),
	percentageOfWorld1(populations[1]),
	percentageOfWorld1(populations[2]),
	percentageOfWorld1(populations[3])
];
console.log(percentages);

// Basic Array Operations (Methods)
const neighbors = [ 'Canada', 'Mexico' ];
neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
	console.log('Probably not a central European county');
}

neighbors[neighbors.indexOf('Mexico')] = 'Republic of Mexico';
console.log(neighbors);

// Introduction to Objects
const myCountry = {
	country: 'United States',
	capital: 'Washington',
	language: 'english',
	population: 330000000,
	neighbors: [ 'Canada', 'Mexico' ],
    getDescription: function() {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
    }
};

myCountry.population = myCountry.population + 2000000;
console.log(myCountry.population);

myCountry['population'] = myCountry['population'] - 2000000;
console.log(myCountry['population']);

// Object Methods
console.log(myCountry.getDescription()); 
