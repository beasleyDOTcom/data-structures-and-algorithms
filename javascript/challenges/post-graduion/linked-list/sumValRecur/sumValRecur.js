function sumValRecur(list) {
    if (!list.head) {
        return null;
    }
    let sum;
    let currentNode = list.head;
    const setSumType = (current) => {
        if (typeof (current.value) === 'number') {
            sum = 0;
        } else if (typeof (current.value) === 'string') {
            sum = '';
        } else {
            throw new Error('Sorry, cannot sum unsupported values.');
        }
    }
    
    setSumType(currentNode);
    
    const recur = (node) => {
        if(!node){
            return;
        }
        if(typeof(node.value) === typeof(sum)){
            sum += node.value;
            recur(node.next);
        } else {
        throw new Error('Sorry, switching types is unsupported at this time');
        }
    }
    recur(currentNode);
    return sum;
}
module.exports = sumValRecur;