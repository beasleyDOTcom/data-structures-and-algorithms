//Given a Array, Remove all duplicate values/keys ... Iteratively.

function removeDupes(arr){
    let seen = new Set();
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(!seen.has(arr[i])){
            result.push(arr[i]);
        }
        seen.add(arr[i])
    }
    return result;
}

module.exports = removeDupes;