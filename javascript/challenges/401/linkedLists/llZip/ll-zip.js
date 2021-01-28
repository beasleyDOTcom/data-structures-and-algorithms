'use strict'
function zipLists(list1, list2){
    
let current1 = list1.head;
let current2 = list2.head;
let pointer1 = current1.next;
let pointer2 = current2.next;

while(current1 && current2){

    pointer1 = current1.next;
    pointer2 = current2.next

    current1.next = current2;
    current2.next = pointer1 || current2.next;
    // pointer1
    // pointer1.next = pointer2
    current1 = pointer1;
    current2 = pointer2;
//pointer2 is value 4 {value: 4, next: { value: 6 , next: null}}
//pointer1 is value 3
}
return list1;

}
module.exports = zipLists;



'use strict'
// function zipLists(list1, list2){
    
// let currentNode1 = list1.head;
// let currentNode2 = list2.head;

//     while(currentNode1 && currentNode2){
//         let pointer1 = currentNode1.next;
//         currentNode1.next = currentNode2;

//         let pointer2 = currentNode2.next;

//         if(pointer1){
//             currentNode2.next = pointer1;
//         }
//         else{
//             break;
//         }
//         currentNode1 = pointer1;
//         currentNode2 = pointer2;
//     }

// }