'use strict'
function twoNumberSum(array, targetSum) {
    let numHash = {};
      for(let i = 0; i < array.length; i++){
          numHash[array[i]] = array[i];
      }
      let result = [];
      
      for(let k = 0; k < array.length; k++){
          let number = array[k];
          let target = targetSum - number;
          if(target !== number && numHash[target] !== undefined ){
              result.push(target);
              result.push(number);
              return result;
          }
      }
      return result;
  }
 module.exports = twoNumberSum
