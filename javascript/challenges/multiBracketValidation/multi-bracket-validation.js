'use strict'

function bracketTown(string){
    const array = [];
    let length = string.length;
    let last = array.length-1;
    for(let i=0; i<string.length; i++){
        last=array.length-1;
        if(array.length==0){last=0}
        let left = /[({[]/;
        let right = /[}\])]/;
        if(left.test(string.charAt(i))){
            array.push(string.charAt(i))
        }
        if(right.test(string.charAt(i))){
            if(string.charAt(i)===array[last]){
               let peeps = array.pop()
            } else {
                return false;
            }
            }
          console.log('times', i)
        }
return true;
}

module.exports = bracketTown;