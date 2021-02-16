function checkIllumination(N, lamps, queries) {
    // create matrix ~ or hashmap representing matrix (query is not zero based)
    // for every lamp, increment each appropriate square (if undefined, now 1);
        const resultArray = [];
        const hash = {};
        //********** ILLUMINATE appropriate SQUARES*********** */
        lamps.forEach(lamp => {
            if(lamp.length < 1){return}
            let originalLocation = [...lamp];
            //lamp = [...lamp];
            for(let x = 1; x <= N; x++){
              //illuminate everything horizontal
              let current = hash[x.toString()+lamp[1].toString()];
              if(current !== undefined){
                hash[x.toString()+lamp[1].toString()]+=1;
              } 
              else {
                hash[x.toString()+lamp[1].toString()] = 1;
              }
            }
            for(let y = 1; y <= N; y++){
              // illuminate everything vertical
              let current = hash[lamp[0].toString() + y.toString()];
              if(current !== undefined){
                hash[lamp[0].toString() + y.toString()]+=1;
              } 
              else {
                hash[lamp[0].toString() + y.toString()] = 1;
              }
            }
            // now X and Y axis of lamp are illuminated but the lamp has been incremented one too many times.
            hash[lamp[0].toString()+lamp[1].toString()]-=1; 

            let x = lamp[0]-1;
            let y = lamp[1]-1;
            while(x > 0 && y > 0){ // from location to bottom left
              if(hash[x.toString() +y.toString()] !== undefined){
                hash[x.toString() +y.toString()]+=1;
              }
              else{
                hash[x.toString() + y.toString()] = 1;
              }
              x-=1;
              y-=1;
            }
            //lamp = [...originalLocation];
   
            x = lamp[0]+1;
            y = lamp[1]+1;
            while(x <= N && y <= N){// from location to top right;
              let current = hash[x.toString() + y.toString()];
              if(hash[x.toString()+y.toString()] !== undefined){
                hash[x.toString()+y.toString()]+=1;
              }
              else{
                hash[x.toString()+y.toString()] = 1;
              }
              x++;
              y++;
            }
            lamp = [...originalLocation];

            x = lamp[0]-1;
            y = lamp[1]+1;
            while(x > 0 && y <= N){//from location to top left;
              let current = hash[x.toString() + y.toString()];
              if(current !== undefined){
                hash[x.toString() + y.toString()]++;
              }
              else {
                hash[x.toString() + y.toString()] = 1;
              }
              x--;
              y++;
            }
            lamp = originalLocation;
            
            
            x = lamp[0]+1;
            y = lamp[1]-1;
            while(x <= N && y > 0){// from location to bottom right
              let current = hash[x.toString()+y.toString()];
              if(current !== undefined){
                hash[x.toString()+y.toString()]++;
              } 
              else {
                hash[x.toString()+y.toString()] = 1;
              }

              x++;
              y--;
            }
        });
        // at this point, we have mapped out every coordinate that has light shed on it.
        //**************************************************** */(

  
            function removeLamp(query, testArea, lamps){
            lamps.forEach(lamp => {
                if(lamp.length < 1){ return }
                if(testArea[lamp[0].toString()+lamp[1].toString()] !== undefined){
    
      // now we are working with a lamp in our testarea and testarea[atquery] needs to be decremented
                testArea[query[0].toString()+query[1].toString()]--;
              }
            })
            return testArea;
        }
    // now we want to take a snapshot of the 8 surrounding squares of our query
    queries.forEach(query => {
      // this function checks that the test area falls within the range of the "board"
        const check = arr => {
      if(arr[0]<1 || arr[0] > N){return false}
      else if(arr[1]<1 || arr[1] > N){return false}
      else{ return true }
      }
    
      let testArea = {};
      // center
      const copy = (string) => testArea[string] = hash[string];
      if(check(query)){
        copy(query[0].toString() + query[1].toString() ); 
      }
      query[0]++;//right of center

      if(check(query)){
        copy(query[0].toString()+query[1].toString());
      }
      query[1]--; // down and right of center

      if(check(query)){
        copy(query[0].toString()+query[1].toString());
      }
      query[0]--;// down from center

      if(check(query)){
        copy(query[0].toString()+query[1].toString());
      }
      query[0]--; // down and left of center

      if(check(query)){
        copy(query[0].toString()+query[1].toString());
      }
      query[1]++;// left of center

      if(check(query)){
      copy(query[0].toString()+query[1].toString());
      }
      query[1]++; // up and left of center

      if(check(query)){
        copy(query[0].toString()+query[1].toString());
      }
      query[0]++;// up from center

      if(check(query)){
        copy(query[0].toString()+query[1].toString());
      }

      query[0]++;// up and right from center
      if(check(query)){
      copy(query[0].toString()+query[1].toString());
      }
      query[0]--;
      query[1]--;

      // query is back to original;
    // now that we have a small sample to work with that we can work on without mutating the original hashmap we want to call our remove lamp function with the query and the lamps array 
    removeLamp(query, testArea, lamps);
        if(testArea[query[0].toString()+query[1].toString()]>0){
          resultArray.push('LIGHT');
        }
        else{
          resultArray.push('DARK');
        }
      });
       return resultArray;
    // for every query, turn off lamps within reach and reduce their relative impact on the hashmap
    // if so, push "LIGHT" else push "DARK"
    // return result array
    }
module.exports = checkIllumination;
    