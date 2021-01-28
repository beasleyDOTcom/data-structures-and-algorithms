'use strict'
const {BinarySearchTree, Node, FindMax} = require('../tree.js');
const fizzBuzzTree = require('../fizz-buzz-tree')

const tree = new Node('a', new Node('b', new Node('d'), new Node('e')), new Node('c', new Node('f')));
const binary = new Node(25, new Node(7, new Node(3), new Node(16, new Node(15), new Node(21))), new Node(42, new Node(30), new Node(85,null, new Node(105)))) 


describe('fizz buzz', () => {
    it('should assign "Buzz" to the root ', () => {
        let fizz = new BinarySearchTree(binary);
        fizzBuzzTree(fizz);
        console.log(fizz);
        expect(fizz.root.value).toBe('Buzz');
    });
    it('should assign "Buzz" to the root ', () => {
        let fizz = new BinarySearchTree(binary);
        fizzBuzzTree(fizz);
        console.log(fizz.root.right.value);
        expect(fizz.root.right.value).toBe('Fizz');
    });
});