'use strict'
function validateBracketTown(initialString){
  let str = initialString.toString();
  const regex = /\{[\w!@#$%^&*:";'<>,.?\/-_=+|\~]*\}|\[[\w!@#$%^&*:";'<>,.?\/-_=+|\~]*\]|\([\w!@#$%^&*:";'<>,.?\/-_=+|\~]*\)/;
  while(regex.test(str)){
    str = str.replace(regex, '');
  }
  if(str.length===0){
    return true;
  } else {
    return false;
  }
}
module.exports = validateBracketTown;

/*
function bracketTown(string){
    const array = [];
    let length = string.length;
    let last = array.length-1;
    for(let i=0; i<=string.length; i++){
      console.log(array)
        last=array.length-1;
        if(array.length==0){last=0}
        let left = /[({[]/;
        let right = /[}\])]/;
    //when closer, evaluate
        if(right.test(string.charAt(i))){
          console.log('right one', string)
            let peeps = array[last];
            if(string.charAt(i)==='}'){
               if(peeps = '{'){
                 array.pop();
               }
               else return false;
               console.log(peeps, 'peeps')
            } else if(string.charAt(i)===')'){
              if(peeps === '('){
                array.pop();
              }
              else return false;
            } else if (string.charAt(i) === ']'){
              if(peeps === '['){
                array.pop();
              }
              else return false;
            }
                return false;
            }
            
            // openers get pushed to array
        if(left.test(string.charAt(i))){
          console.log('left')
            array.push(string.charAt(i))
        }
          
            console.log('current i', i) 
        }
return true
}
*/