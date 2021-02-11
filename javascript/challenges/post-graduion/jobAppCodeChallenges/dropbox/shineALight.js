function checkIllumination(N, lamps, queries) {
    // create matrix ~ or hashmap representing matrix (query is not zero based)
    // for every lamp, increment each appropriate square (if undefined, now 1);
        const resultArray = [];
        const hash = {};
        //********** ILLUMINATE appropriate SQUARES*********** */
        console.log('first lamps ever', lamps)
        lamps.forEach(lamp => {
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
            console.log('x and y', hash, queries)
            // now X and Y axis of lamp are illuminated but the lamp has been incremented one too many times.
            hash[lamp[0].toString()+lamp[1].toString()]-=1; 
    
            let originalLocation = lamp;
            lamp[0]-=1;
            lamp[1]-=1;
            console.log('line 37 lamps', lamps)
            while(lamp[0] > 0 && lamp[1] > 0){ // from location to bottom left
              if(hash[lamp[0].toString() +lamp[1].toString()] !== undefined){
                hash[lamp[0].toString() +lamp[1].toString()]+=1;
              }
              else{
                hash[lamp[0].toString() +lamp[1].toString()] = 1;
              }
              lamp[0]-=1;
              lamp[1]-=1;
            }
            lamp = originalLocation;
            lamp[0]+=1;
            lamp[1]+=1;
            while(lamp[0]<=N && lamp[1] <= N){// from location to top right;
              let current = hash[lamp[0].toString() + lamp[1].toString()];
              if(hash[lamp[0].toString()+lamp[1].toString()] !== undefined){
                hash[lamp[0].toString()+lamp[1].toString()]+=1;
              }
              else{
                hash[lamp[0].toString()+lamp[1].toString()] = 1;
              }
              lamp[0]++;
              lamp[1]++;
            }
            lamp = originalLocation;
            lamp[0]-=1;
            lamp[1]+=1;
    
            while(lamp[0] > 0 && lamp[1] <= N){//from location to top left;
              let current = hash[lamp[0].toString() + lamp[1].toString()];
              if(current !== undefined){
                hash[lamp[0].toString() + lamp[1].toString()]++;
              }
              else {
                hash[lamp[0].toString() + lamp[1].toString()] = 1;
              }
              lamp[0]--;
              lamp[1]++;
            }
            lamp = originalLocation;
            lamp[0]+=1;
            lamp[1]-=1;
            while(lamp[0] <= N && lamp[1] > 0){// from location to bottom right
              let current = hash[lamp[0].toString()+lamp[1].toString()];
              if(current !== undefined){
                hash[lamp[0].toString()+lamp[1].toString()]++;
              } 
              else {
                hash[lamp[0].toString()+lamp[1].toString()] = 1;
              }
            }
        });
        console.log('this is lamps', lamps)
        // at this point, we have mapped out every coordinate that has light shed on it.
        //**************************************************** */(
            console.log('from location to bottom right', hash)
    
        function removeLamp(query, testArea, lamps){
            lamps.forEach(lamp => {
           //              console.log(lamp, 'before', testArea)
    
              if(testArea[lamp[0].toString()+lamp[1].toString()] !== undefined){
    
      // now we are working with a lamp in our testarea and testarea[atquery] needs to be decremented
                testArea[query[0].toString()+query[1].toString()]--;
              }
            //  console.log('after', testArea)
            })
            return testArea;
        }
    // now we want to take a snapshot of the 8 surrounding squares of our query
    queries.forEach(query => {
      const check = arr => {
      if(arr[0]<1 || arr[0] > N){return false}
      else if(arr[1]<1 || arr[1] > N){return false}
      else{ return true }
      }
    
      let testArea = {};
      // center
      console.log('this is query', query)
      const copy = (string) => testArea[string] = hash[string];
      if(check(query)){
        copy(query[0].toString() + query[1].toString() ); 
        query[0]++;//right of center
      }
      if(check(query)){
        copy(query[0].toString()+query[1].toString());
        query[1]--; // down and right of center
      }
      if(check(query)){
        copy(query[0].toString()+query[1].toString());
        query[0]--;// down from center
      }
      if(check(query)){
        copy(query[0].toString()+query[1].toString());
        query[0]--; // down and left of center
      }
      if(check(query)){
        copy(query[0].toString()+query[1].toString());
        query[1]++;// left of center
      }
      if(check(query)){
      copy(query[0].toString()+query[1].toString());
      query[1]++; // up and left of center
      }
      if(check(query)){
        copy(query[0].toString()+query[1].toString());
        query[0]++;// up from center
      }
      if(check(query)){
        copy(query[0].toString()+query[1].toString());
        query[0]++;// up and right from center
      }
      if(check(query)){
      copy(query[0].toString()+query[1].toString());
      query[0]--;
      query[1]--;
      }
    // query is back to original;
    // now that we have a small sample to work with that we can work on without mutating the original hashmap we want to call our remove lamp function with the query and the lamps array 
    console.log('lamps:', lamps, 'test area', testArea)
        removeLamp(query, testArea, lamps);
    console.log('AFTER - lamps:', lamps, 'test area', testArea)
    
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
    
    
    /*console.log(testArea)
        removeLamp(query, testArea, lamps);
        console.log('this is test area', testArea)
        console.log('this is the query', query)
        console.log('this is test area at query', testArea[query[0]
    
        */