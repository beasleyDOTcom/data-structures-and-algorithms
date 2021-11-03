'use strict'

function insertSort(arr){
    for(let i = 1; i< arr.length; i++){
      let j = i - 1; 
      let temp = arr[i];
      while(j >= 0 && temp <arr[j]){
        arr[j+1] = arr[j];
        j--
      }
      arr[j+1] = temp;
    }
    return arr;

}

    // for(let i = 0; i<arr.length; i++){
    //   //if newArr is empty just put it in
    //   if(newArr[0] !== 0 || false){
    //       newArr.push(arr[i]);
    //   }
    //   // else sort on insert
    //   else{
    //     for(let j = newArr.length -1; newArr[j ; j--){

    //     }
    //   }

    // }

    module.exports = insertSort;