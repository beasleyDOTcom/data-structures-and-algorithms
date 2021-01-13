function selectionSort(arr){
    for (let i = 0; i < arr.length - 1; i++) {// this is what we are going to assign the min value of search area
        let min = i;//1
        1      //3     //3
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }// by this time we have found the index of minimum value in the search area
        let temp = arr[i]; //3
        arr[i] = arr[min]; //2
        arr[min] = temp; // 3
    }
    return arr;
}
module.exports = selectionSort;