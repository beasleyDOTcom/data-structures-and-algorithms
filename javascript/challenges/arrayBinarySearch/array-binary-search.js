'use strict'

function binarySearch(arr, kilmer){
    let firstPlace = 0;
    let lastPlace = arr.length-1;
    
    while(lastPlace>=firstPlace){
       middle = Math.floor((firstPlace + lastPlace)/2);
      if(kilmer === arr[middle]){
        return middle;
      }
      if(kilmer<arr[middle]){
        lastPlace = middle-1;
      }
      else {
        firstPlace = middle+1;
      }
    };
     return -1;
    }; 