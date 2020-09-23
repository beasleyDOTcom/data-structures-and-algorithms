const {BinarySearchTree, Node} = require('../../tree/tree.js');
const treeIntersection = require('../treeIntersection.js');


const bst = new BinarySearchTree();
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(6);
bst.add(8);
bst.add(9);
bst.add(0);
bst.add(99);
bst.add(55);
bst.add(59);

const bst2 = new BinarySearchTree();
bst2.add(44);
bst2.add(5);
bst2.add(6);
bst2.add(8);
bst2.add(66);
bst2.add(99);
bst2.add(33);
bst2.add(9);

it('should return an array of numbers found in both trees', () => {
    expect(treeIntersection(bst, bst2)).toStrictEqual([5,6,8,9,99]);
});


