function findMin(LinkedList){
    if(LinkedList.head === null){ return null}

    let min = LinkedList.head.value;
    let currentNode = LinkedList.head.next;
    while(currentNode !== null){
        if(currentNode.value < min){
            min = currentNode.value;
        }
        currentNode = currentNode.next;
    }

    return min;
}

module.exports = findMin;