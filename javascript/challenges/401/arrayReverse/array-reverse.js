// I am going to locate the end of the array.
// push the item from the end of the array to a new array.
// then progress from the end of the array to the next to last position that was pushed.
// then return the new array.
const arrayReverse = (arr) => {
    let endOfArray = arr.length -1;
    return arr.reduce((acc, val, index) => {
        let positionToPush = endOfArray - index;
        acc.push(arr[positionToPush]);
        return acc;  
    },[])
  };
  console.log(arrayReverse([1,2,3,4,5,5,6,6,7]))