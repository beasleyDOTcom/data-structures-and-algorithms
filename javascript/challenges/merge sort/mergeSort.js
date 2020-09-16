let arr1 = [8,4,23,42,16,15];

function merge(arr){
let n = arr.length;
if(n>1){
let mid = Math.floor(n/2);
let left = [];
let right = [];
let i = 0;
while(i<mid){
  left.push(arr[i]);
  i++
}
while(i<arr.length){
  right.push(arr[i]);
  i++;
}
// arr has been split into two arrays of near equal length
if(left.length>1){
merge(left);
}
if(right.length>1){
merge(right);
}
} //end of if
else return;

return 
}








console.log(merge(arr1))