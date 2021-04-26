'use strict';

function angryProfessor(k, a) {
    // basic algorithm:

    /*
    studentsOnTime = 0;
    for loop through array (a)
    if studentsOnTime >= k return 'YES'
    if a[i] <= 0 studentsOnTime++

    */
    let studentsOnTime = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] <= 0){
            studentsOnTime++;
        }
        if(studentsOnTime >= k){
            return 'YES';
        }
    }
    return 'NO';
}


module.exports = angryProfessor;