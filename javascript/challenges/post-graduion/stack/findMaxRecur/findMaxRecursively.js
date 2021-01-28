function getMax(Stack){
    if(Stack.isEmpty()){
        return null;
    }
    let max = Stack.pop();
    
    function _helper(Stack){
        if(Stack.isEmpty()){
            return 
        }
        let temp = Stack.pop();
        if(max < temp){
            max = temp;
        }
        _helper(Stack)
    }
    _helper(Stack);
    return max;
}

module.exports = getMax;