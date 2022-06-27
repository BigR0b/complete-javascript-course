// Values and Variables
const country = "United States";
const continent = "North America";
let population = 332818657;
console.log(`${country}, ${continent}, ${population}`);

// Data Types
const isIsland = false;
let language 

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// let, const and var
language = "english";

// Basic Operators
let halfPopulation = population / 2;
let populationByOne = population + 1;

console.log(halfPopulation, populationByOne);

// Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} people speack ${language}.`;
console.log(description);

// Taking Decisions: if / else Statements
const averagePopulation = 33000000;

if (population > averagePopulation) {
    console.log(`${country}'s population is above average.`);
}else{
    console.log(`${country}'s population is ${averagePopulation - population} below average.`);
}

// Type Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// Equality Operators: == vs. ===
/* let numNeighbors = parseInt(prompt('How many neighbor countries does your country have?'));

if(numNeighbors === 1){
    console.log('Only 1 border!');
}else if(numNeighbors > 1) {
    console.log('More than 1 border.');
}else{
    console.log('No borders.');
}
*/

// Logical Operators
if (language === 'english' && population < 50000000 && !isIsland) {
    console.log('You should live in the United States :)');
}else{
    console.log('The United States does not meet your criteria :(');
}