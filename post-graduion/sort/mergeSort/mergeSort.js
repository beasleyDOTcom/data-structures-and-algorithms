'use strict';

// separate partition / merge functions?
// shift

// INPUT: [2, 3, 7, 5, 7, 9]
// OUTPUT:

// ALGORITHM

// Break down input into single partitions
// Partition needs to increment
// Helper merge function, does the work of evaluating smaller and bigger
function main(arr) {

  let half = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, half);
  let rightHalf = arr.slice(half);


  // [2, 3, 7]  [9, 7, 5]
  // half = 1
  // leftHalf = [2,3]
  // rightHalf= [7]
  //returns [2,3,7] left side is done

  function _merge(left, right) {

    let i = 0;
    let j = 0;
    let resultArr = [];

    // [2, 3, 7]  [5, 7, 9]
    //arr  [2, 3, 7] i = 3;
    // j= 0
    while (i < left.length || j < right.length) {

      if (i >= left.length) {

        while (j < right.length) {
          resultArr.push(right[j])
          j++;
        }

      } else if (j >= right.length) {


        while (i < left.length) {
          resultArr.push(left[i])
          i++;
        }

      }

      if (left[i] <= right[j]) {
        resultArr.push(left[i]);
        i++;
      } else if (right[j] <= left[i]) {
        resultArr.push(right[j]);
        j++;
      }

    }

    // resultArr will be the 'left' next time its called
    return resultArr;


  }

  function _partition(left, right) {

    if (left.length > 1) {
      let half = Math.ceil(left.length / 2);
      let leftHalf = left.slice(0, half);
      let rightHalf = left.slice(half);
      left = _partition(leftHalf, rightHalf);
    }
    //[9, 7, 5]
    //[9, 7], [5]
    // [9] [7]
    // returns: [7, 9]
    // [7,9] [5]
    // [5, 7, 9]
    //[2,3,7] [5,7,9]
    //[2,3,5,7,7,9]

    if (right.length > 1) {
      half = Math.ceil(right.length / 2);
      leftHalf = right.slice(0, half);
      rightHalf = right.slice(half);
      right = _partition(leftHalf, rightHalf);
    }

    // we want to call merge when left and right are only 1 item 
    return _merge(left, right);

  }



  return _partition(leftHalf, rightHalf);
}

module.exports = main;
