/*
problem domain: We want to make an optimal implementation of quick sort by calling swap 
so that values on left of chosen partition are of lesser value than partition and values to the right
of partition are greater than the value of partition.
input: [1,4,5,2]
output: [1,2,4,5]

[1,2,5,4]2
[1,2,4,5]4
Considerations: we want to sort this array in place. 
Algorithm:
    
look at section of array.
    define partition as last item in array (end)
    define i as start - 1;
    define j as start.
    evaluate every item from j to partition - 1;
    if item is greater than partition just move on.
    if item is less than partition, and i !== j increment i and swap values at i and j.
    when for loop ends, increment i and swap values at i and partition. 
    this should leave us with 
    * at this point i is the partition
    now we want to call quickSort on left section(arr, start, i) and return right section(arr, i, pivot)
*/

function swap(arr, left, right){
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    return arr;
}

function quickSort(arr, start=0, pivot=arr.length-1){
    if(pivot - start <= 1){ return arr}
    let i = start-1;
    for(let j = start; j < pivot; j++){
        if(arr[j] <= arr[pivot]){
            i++;
            if(i !== j){
                swap(arr, i, j);
            }
        }
    }
    i++;
    swap(arr, i, pivot);
    quickSort(arr, start, i-1);
    quickSort(arr, i, pivot);
    return arr;
}

module.exports = quickSort;