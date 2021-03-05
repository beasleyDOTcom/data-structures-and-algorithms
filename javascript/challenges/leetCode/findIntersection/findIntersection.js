function findIntersection(headA, headB){
    let seen = new Set();
    let current = headA;
    while(current){
        seen.add(current);
        current = current.next;
    }
    let currentNode = headB;
    while(currentNode){
        if(seen.has(currentNode)){
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}

module.exports = findIntersection;