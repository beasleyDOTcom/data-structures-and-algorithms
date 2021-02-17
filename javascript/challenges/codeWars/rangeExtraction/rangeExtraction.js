// look at every item in list
// if item +1 === next item && item +2 equals next.next
// if false - push number to resultArr
// if true - a range is in order
// we want to start range with original.toString()
// + ''-'+lastIncremented.toString()
// 

function addRange(list) {
    let result = '';
    //[1,2,3,4,5,6,8,9] 
    // length = 8;
    //      i = 0
    for (let i = 0; i < list.length; i++) {
        if (i < list.length - 2) {
            if (list[i] + 1 === list[i + 1] && list[i] + 2 === list[i + 2]) {// 1+1 === 2 && 1+2 === 3
                if (result.length === 0) {
                    result = list[i].toString();
                } else {
                    result = result + ',' + list[i].toString();
                }
                while (list[i] + 2 === list[i + 2]) {
                    // ok, so a range will be added here--but how big is the range? 
                    i++;
                    // when this fails we know that arr[i+2] does not fall within range and arr[i+1] is the end of our range
                }
                result = result + '-' + list[i + 1].toString();
                i++;
            }
            else {
                if (result.length === 0) {
                    result = list[i].toString();
                }
                else {
                    result = result + ',' + list[i].toString(); // add last two numbers to string
                }
            }
        }
        else {
            if (result.length === 0) {
                result = list[i].toString();
            }
            else {
                result = result + ',' + list[i].toString(); // add last two numbers to string
            }
        }
    }
    return result;
}
module.exports = addRange;