'use strict';


const treeIntersection = (tree1, tree2) => {
  const arr1 = tree1.inOrder()
  const arr2 = tree2.inOrder()
  const retArr = []
  for(let i = 0;i < arr1.length; i ++) {
    if(arr2.includes(arr1[i])){
      retArr.push(arr1[i])
    }
  }
  return retArr;
}
module.exports = treeIntersection;