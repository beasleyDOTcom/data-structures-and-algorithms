const Calculator = function() {
    this.evaluate = string => {
      // split string on space
      let array = string.split(' '); // is array.length < 2?
      // for each order of operations:
      // do Math of number before and after and splice() result
    for(let i = 0; i < array.length; i++){
      if(array[i] === '*'){
        array.splice(i-1,3,(parseFloat(array[i-1]) * parseFloat(array[i+1])))
        i = i - 1 ;
      }
      if(array[i] === '/'){
        array.splice(i-1,3,(parseFloat(array[i-1]) / parseFloat(array[i+1])))
        i = i - 1;
      }
    }
  
    for(let j = 0; j < array.length; j++){
      if(array[j] === '+'){
        array.splice(j-1,3, (parseFloat(array[j-1]) + parseFloat(array[j+1])))
        j = j -1;
      }
      if(array[j] === '-'){
        array.splice(j-1, 3, (parseFloat(array[j-1]) - parseFloat(array[j+1])))
        j = j -1;
      }
    }
    
    return array.join()  
    }
  };