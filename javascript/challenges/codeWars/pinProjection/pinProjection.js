'use strict'

function getPINs(observed) {
    const result = [];
    function replaceNumber(index, replacement, ...string){
      result.push(string.splice(index,1, replacement))
    }
    for(let i = 0; i < observed.length; i++){
      switch(observed[i]){
          case '1':
          replaceNumber()
          break;
      }
    }
    return [11,2]
  }

  module.exports = getPINs;