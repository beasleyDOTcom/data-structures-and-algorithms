# selection sort

given: [1, 3, 2, 5, 0]
return:[0, 1, 2, 3, 5]
## algorithm:
build a sorted side of array starting with index 0
initialize min with index 0;
compare rest of list with min to find the minimum value
swap min with selection 

seach area will be replaced with sorted area one index at a time from left to right.

// [2, 3, 1]
// [1, 3, 2]
// [1, 2, 3]
# pseudo code
function selectionSort(arr){
                        // 2
    for(let i = 0; i < arr.length-1; i++){// this is what we are going to assign the min value of search area
        let min = i;//1
                1      //3     //3
        for(let j = i +1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }// by this time we have found the index of minimum value in the search area
        let temp = arr[i]; //3
        arr[i] = arr[min]; //2
        arr[min] = temp; // 3
    }
    return arr;

}