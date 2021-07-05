'use strict'

// We can still make you better...😬

const teamName = [];
const homeTeamScores = [];
const awayTeamScores = [];
let homeTotal = 0;
let awayTotal = 0;
let avgHome =0;
let avgAway = 0;

const nameTheTeams = function() {
    alert("You're about to enter the Risk Playgrounds. Press 'OK' to continue.");

    for (let i = 0; i < 2; i++){
        teamName[i] = prompt (`Please enter the name of team ${[i+1]}`);
    }

    return alert(`     CONFIRMATION:
    Concerned teams ${teamName[0]} and the ${teamName[1]}`);
}

const calcScores = function() {
    nameTheTeams();

    const homeScoresLogged = prompt (`How many scores would you like to enter for ${teamName[0]}?`);
    for (let h = 0; h<homeScoresLogged; h++){
        homeTeamScores[h] = Number.parseInt(prompt(`Enter score ${h+1}`));
        homeTotal = homeTotal + homeTeamScores[h];
    }

    const awayScoresLogged = prompt (`How many scores would you like to enter for ${teamName[1]}?`);
    for (let a = 0; a<awayScoresLogged; a++){
        awayTeamScores[a] = Number.parseInt(prompt(`Enter score ${a+1}`));
        awayTotal += awayTeamScores[a];
    }

    return alert("Scores recorded! Please wait for the average to be calculated...");
}

const calcAverage = function () {
    calcScores();

    avgHome = homeTotal/ homeTeamScores.length;
    avgAway = awayTotal/ awayTeamScores.length;

    return alert("Averages have been calculated. Finalizing the winner...");
}

const checkWinner = function() {
    calcAverage();

    if(avgHome > avgAway && avgHome >= avgAway *2){
        return console.log(`${teamName[0]} win! (${avgHome} vs ${avgAway})`);
    } else if(avgAway > avgHome && avgAway >= avgHome * 2){
        return console.log(`${teamName[1]} win! (${avgAway} vs ${avgHome})`);
    }
    else {
        return console.log(`Whack game! Score: ${teamName[0]} ${avgHome} - ${avgAway} ${teamName[1]}`);
    }
}
console.log(checkWinner());