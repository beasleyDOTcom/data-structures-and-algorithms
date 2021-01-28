'use strict'
/////////////////////////////////////////////////////
function partition(arr, start, end){
    let pivotIndex = start;
    let pivotValue = arr[end];
    for(let i =start; i< end; i++){
      if(arr[i]<pivotValue){
        swap(arr,i, pivotIndex);
        pivotIndex++;
      }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

////////////////////////////////////////////////////////
function swap(arr, left, right){
  let temp = arr[left];
  arr[left]=arr[right];
  arr[right] = temp;
  return arr;
}

////////////////////////////////////////////////////////
function quickSort(arr, start, end){
  
  if(start>=end){return}

  let pivotIndex = partition(arr, start, end);
  quickSort(arr, start, pivotIndex-1);
  quickSort(arr, pivotIndex+1, end);
  return arr;
}
////////////////////////////////////////////////////////
function quickStart(arr){
  return quickSort(arr, 0, arr.length-1)
}

module.exports = quickStart;