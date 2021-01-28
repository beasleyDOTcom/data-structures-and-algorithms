'use strict';

function leftJoin(leftHash, rightHash){
    let leftArray = leftHash.buckets.filter( item => item !== undefined).flat();
    let rightArray = rightHash.buckets.filter( item => item !== undefined ).flat();
    let rightKeys = [];
    for(let j = 0; j< rightArray.length; j++){
        let temp = rightArray[j];
        rightKeys.push(temp[0]);
    }
    rightArray = rightArray.flat();
    let resultArray = [];
    for(let i = 0 ; i< leftArray.length; i++){
        let temp = leftArray[i];
        resultArray.push(temp);
        if(rightKeys.includes(temp[0])){
            resultArray[i].push(rightArray[rightArray.indexOf(temp[0])+1])

        }
        else{
            let myGrade = null;
            resultArray[i].push(myGrade)
        }
    }
    return resultArray;


}
module.exports = leftJoin;





// function leftJoin(leftHash, rightHash){
// let leftArray = Object.keys(leftHash)
// let rightArray = Object.keys(rightHash)
// let resultArray = [];
// for(let i =0; i<leftArray.length; i++){
// let temp = [];
// temp.push(leftArray[i].toString())
// temp.push(leftHash[leftArray[i]])
// if(rightArray.includes(leftArray[i]){
// temp.push(rightHash[leftArray[i]])
// }
// resultArray.push(temp)
// }
// return resultArray;
// }