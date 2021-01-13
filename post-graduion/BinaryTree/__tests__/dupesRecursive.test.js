'use strict';

const getDupes = require('../dupesRecursive.js');
const BinaryTree = require('../BinaryTree.js');
const bt = new BinaryTree();
bt.add(1);
bt.add(3);
bt.add(99);
bt.add(1);
bt.add(3);
bt.add('popo');
bt.add(7);
bt.add(9);
bt.add(99);
bt.add('she show');
bt.add('POPO');
describe('testing getDupes ability to return the duplicates from a Binary Tree', () => {

    it('should return a duplicate value from a binary tree', () => {
        const result = getDupes(bt);
        expect(result).toContain(99);
    });

    it('should return a duplicate values of both numbers and strings', () => {
        bt.add('popo');
        const result = getDupes(bt);
        expect(result).toContain('popo');
    });
    it('should return null an empty array if there are no duplicates in the Binary Tree', () => {
        const empty = new BinaryTree();
        expect(getDupes(empty)).toStrictEqual([]);
    });
});