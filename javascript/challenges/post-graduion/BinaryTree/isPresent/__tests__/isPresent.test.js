'use strict';
const BinaryTree = 'ha'/// require something
const isPresent = require('../isPresent.js');
const tree = new BinaryTree();

describe('test whether isPresent(value, tree) detects the presence of a value in a list.', () => {
    it('should return false if tree is empty', () => {
        expect(isPresent('hello',tree)).toBeFalsy();
    });
    it('should return true if asked if "false" is present in a tree that has a node with a value of "false"', () => {
        tree.add('Node');
        tree.add("false");
        tree.add('true');
        expect(isPresent('false', tree)).toBeTruthy();
    });
    it('should return false if value requested is not present in tree', () => {
        expect(isPresent('WORLD', tree)).toBeFalse();
    });
});