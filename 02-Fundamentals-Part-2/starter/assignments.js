'use strict';
// Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}

const country1 = describeCountry('United States', 333000000, 'Washington');
const country2 = describeCountry('Canada', 38000000, 'Ottawa');
const country3 = describeCountry('Mexico', 128000000, 'Mexico City');

console.log(country1);
console.log(country2);
console.log(country3);

