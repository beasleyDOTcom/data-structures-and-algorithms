// change direction of pointer until null is reached
function reverseReverse(linkedList){
    if(!linkedList.head){return null}
    let newNext = null;
    function _helper(node){
        if(!node.next){
            node.next = newNext;
            linkedList.head = node;
            return linkedList;
        }
        let temp = node.next;
        node.next = newNext;
        newNext = node;
        return _helper(temp)
    }
    if(linkedList.head.next){
        if(linkedList.head.next.next){
            _helper(linkedList.head)
        }
        else {
            let temp = linkedList.head.next;
            linkedList.head.next.next = linkedList.head;
            linkedList.head.next = newNext;
            return linkedList;
        }
    }
    
}