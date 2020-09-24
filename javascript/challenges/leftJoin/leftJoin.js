
function leftJoin(leftHash, rightHash){
let leftArray = Object.keys(leftHash)
let rightArray = Object.keys(rightHash)
let resultArray = [];
for(let i =0; i<leftArray.length; i++){
let temp = [];
temp.push(leftArray[i].toString())
temp.push(leftHash[leftArray[i]])
if(rightArray.includes(leftArray[i]){
temp.push(rightHash[leftArray[i]])
}
resultArray.push(temp)
}
return resultArray;
}