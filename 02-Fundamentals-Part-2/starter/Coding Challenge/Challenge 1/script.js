'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85,54,41);
const avgKoalas = calcAverage(23,34,27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        return console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2){
        return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }else{
        return console.log(`No winner ${avgDolphins}, ${avgKoalas}`);
    }
}

checkWinner(avgDolphins, avgKoalas);