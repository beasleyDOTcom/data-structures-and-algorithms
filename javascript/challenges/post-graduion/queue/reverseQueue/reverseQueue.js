'use strict';

function reverseQueue(q){
    if(q.front === null){return 'Nothing to reverse'}
    let B = q.front;
    let A = null;
    let C = B.next;
    q.rear = B;

      // front                              back
      // 1 --> 2 --> 3 --> 4 --> 5 --> 6 --> null
//                                     A     B     C
//null<--1
//     rear
    while(B !== null){
       C = B.next; 
       B.next = A;
        A = B;
        B = C;
    }
    q.front = A;
    return q;
}
module.exports = reverseQueue;