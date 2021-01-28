'use strict';

function depthFirst(edges){
    if(!edges){return;}
    let seen = new Set();

    function _helper(node){
        if(!node){return;}
        console.log('this here', node.friends)
        
        for(let edge of node.friends){
            if(seen.has(edge)){
                break;
            } else{
                seen.add(edge)
                return _helper(edge)
            }
        }
    }
    let result = [];
    for(let edge of edges){
        _helper(edge)
    }
     seen.forEach(item=> result.push(item));
     console.log('result here', result)
     return seen;
}

module.exports = depthFirst;