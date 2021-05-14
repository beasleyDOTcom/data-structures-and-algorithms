'use strict'
// If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
 function numberOfMatches(n){

    let matches = 0;
    let teams = n;
    
    while(teams/2 > 1){
    
        if(teams % 2 === 0){
            //even
            matches += teams / 2;
            teams = teams / 2;
        } else {
            //odd
            matches += (teams -1) / 2;
            teams = (teams -1) / 2 + 1;
        }
    }
    
    return matches +1;
 } 
 
 module.exports = numberOfMatches
