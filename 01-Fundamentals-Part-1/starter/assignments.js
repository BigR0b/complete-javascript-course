// Assignment Values and Variables
const country = "United States";
const continent = "North America";
let population = 332818657;
console.log(`${country}, ${continent}, ${population}`);

// Assignment Data Types
const isIsland = true;
let language 

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

// Assignment let, const and var
language = "english";

// Assignment Basic Operators
let halfPopulation = population / 2;
let populationByOne = population + 1;

console.log(halfPopulation, populationByOne);

// Assignment Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} people speack ${language}.`;
console.log(description);

// Assignment Taking Decisions: if / else Statements
const averagePopulation = 33000000;

if (population > averagePopulation) {
    console.log(`${country}'s population is above average.`);
}else{
    console.log(`${country}'s population is ${averagePopulation - population} below average.`);
}

// Assignment Type Conversion and Coercion
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;




