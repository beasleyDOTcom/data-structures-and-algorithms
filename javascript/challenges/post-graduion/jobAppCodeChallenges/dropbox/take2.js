const { result } = require("./insertComman");

function checkIllumination(N, lamps, queries){
    console.log('look here now', lamps.length, queries.length)
    const resultArray = [];
    queries.forEach(query => {
        const testArea = new Set();
        let x = query[0];
        let y = query[1];
        testArea.add([x,y+1].toString())
        testArea.add([x,y].toString())
        testArea.add([x,y-1].toString())
        testArea.add([x+1,y+1].toString())
        testArea.add([x+1,y].toString())
        testArea.add([x+1,y-1].toString())    
        testArea.add([x-1,y+1].toString())
        testArea.add([x-1,y].toString())
        testArea.add([x-1,y-1].toString())
        // now testArea contains all of the indexes it needs to turn off appropriate lamps
        const diagon = new Set();
        let i = 1;
        while(x+i <= N && y + i <= N){// from home to top right -- while coordinates are still on board
            diagon.add([x+i, y+i].toString());
            x++;
            y++;
        }
        x = query[0];
        y = query[1];
        i = 1;
        while(x-i > 0 && y-i > 0){// from home to bottom left
            diagon.add([x-i, y-i].toString());
            x--;
            y--;
        }
        i=1;
        x = query[0];
        y = query[1];
        while(x+i <= N && y-i > 0){// from home to bottom right
            diagon.add([x+i, y-i].toString());
            x++;
            y--;
        }
        i=1;
        x = query[0];
        y = query[1];
        while(x-i>0 && y +i <= N){// from home to top left;
            diagon.add([x-i, y+i].toString());
            x--;
            y++;
        }
        //now diagonal holds all values that may shed light on query
        for(let j = 0; j < lamps.length; j++){
            if(!testArea.has(lamps[j].toString())){// lamp is not within reach of turning off so light is allowed
                // does lamp shed light on query?
                if(lamps[j][0]===query[0] || lamps[j][1]===query[1]){
                    resultArray.push('LIGHT');
                    return;// return out because we are done with this query.
                }// so we've handled the case that the lamp shares an x or y coordinate... how about diaginal?
                if(diagon.has(lamps[j].toString())){
                    resultArray.push('LIGHT');
                    return; // return out because we have resolved this query.
                }
            }
        }
        resultArray.push('DARK'); // if we have gotten this far it means that there was no suitable light shed on query.
    })
    return resultArray;
}
module.exports = checkIllumination;