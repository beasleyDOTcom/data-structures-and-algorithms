function getMax(Stack){
    if(!Stack.isEmpty()){
        return null;
    } else {
        let max = Stack.pop();
    }
    function _helper(Stack){
        if(!Stack.isEmpty()){
            return;
        }
        let temp = stack.pop();
        if(max < temp){
            max = temp;
        }
        _helper(Stack)
    }

    return max;
}

module.exports = getMax;