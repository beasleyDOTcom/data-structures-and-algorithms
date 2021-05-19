'use strict';
function maximumPopulation(logs){ 
    
    let best = {
        count: 0,
        year: -9999999999999
    };
    //    [ [1950,1961],   [1960,1971],   [1970,1981]]
    // which birth year occurs in the most other subArrays?
    for(let i = 0; i < logs.length; i++){
        let currentPopulation = 1;
        for(let k = 0; k < logs.length; k++){
            if(i !== k){
                // if this birth year falls in the range of a another lifespan
                if(logs[k][0] <= logs[i][0]  && logs[i][0] < logs[k][1]){

                    currentPopulation += 1;
                }
            }
        }

        if(currentPopulation == best.count){
            best.count = currentPopulation;
            if(best.year > logs[i][0]){
                best.year = logs[i][0];
            }
        } else if(currentPopulation > best.count){
            best.count = currentPopulation;
            best.year = logs[i][0];
        }
    }

    return best.year;
}

module.exports = maximumPopulation;