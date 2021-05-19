'use strict'
// how to do this?
// how do we find the years that the most people were alive?
// in other words, how many sub arrays share some of the same range?
// for each sub array, how many sub arrays does it share range with?
// of those, which is the earliest date of their appearance?
// I wonder if there is a way to sort of lay these down on top of each other and then find the earliest occurance of the highest stack.
// 1995 1996 1997 1998 1999
   //   1996 1997
// 1995 1996 1997 1998
// 1996
//[[1995,1999],[1996,1998],[1995,1998],[1996,2000]]


// [ [1950,1961],   [1960,1971],   [1970,1981]]
 function maximumPopulation(logs){ 
   if(logs.length ===1){return logs[0][0]} 
   // find earliest birth year in population
   let currentYear = logs[0][0];  // ----->    1950
   // find highest death year in population -> 1961
   let highest = logs[0][1];
   for(let i = 1; i < logs.length; i++){
      // find earliest year in population
      if(logs[i][0] < currentYear){ // 1950, 
         currentYear = logs[i][0];
      }
      if(logs[i][1] > highest){
         highest = logs[i][1];
      }
   }

   let best = {
      count : 1,
      year : currentYear
   }

   // enumerates every year between currentYear and highest
   while (currentYear <= highest){
     
//    does currentYear have more people who are living this year than the best year?
      let currentCount = 0;
      for(let k = 0; k < logs.length; k++){
//           if person was alive between birth and death 
         if(logs[k][0] <= currentYear && currentYear < logs[k][1]){
//          one for every person alive during current 
            currentCount++;
         }
      }
//       if this year had a higher population than best
      if(currentCount > best.count){
         best.count = currentCount;
         best.year = currentYear;
      }
      
      currentYear += 1;
   }
   
   return best.year;   
 } 

 module.exports = maximumPopulation;



