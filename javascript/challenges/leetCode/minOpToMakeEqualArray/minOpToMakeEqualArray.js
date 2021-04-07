'use strict';
function minOperations(n){
    return Math.floor((n*n)/4);
}

// FIRST TRY
// function minOperations(n){
//     let result = new Array(n);

//     for(let i = 0; i < n; i++){
//         result[i] = (i * 2) + 1;
//     }

//     let count = 0;
//     for(let i = 0; i < n/2; i++){
//         while(result[i] < n){
//             result[i] +=1
//             result[result.length-i-1] -= 1;
//             count++;
//         }
//     }
//     return count;

// }

module.exports = minOperations;

///  [ 1, 3, 5, 7, 9, 11 ]
/*

2 - 10
3 - 9
4 - 8
5 - 7
6 - 6

4 / 8
5 / 7
6 / 6

6 / 6



 [ 1, 3, 5, 7, 9, 11, 13, 15 ]

 2 / 14
 3 / 13
 4 / 12
 5 / 11
 6 / 10
 7 / 9
 8 / 8 --> 7  

 4 / 12
 5 / 11
 6 / 10
 7 / 9
 8 / 8 --> 5

 6 / 10
 7 / 9
 8 / 8 --> 3

 8 / 8 --> 1


 [1 , 3, 5 ]

 2 / 4
 3 / 3

[ 1, 3, 5, 7, 9 ]

2 / 8
3 / 7
4 / 6
5 / 5 --> 4

4 / 6
5 / 5 --> 2
*/