'use strict';

const circularList = require('../circularlyLinkedList.js');

describe('The goal of this suite is to determine the successful construction of a circularly linked list. ', () => {
    it('Should add a node to a linked list when given a value.', () => {
        const getInLine = new circularList();
        getInLine.addPlayer('Cat');
        expect(getInLine.head.value).toStrictEqual('Cat');
    });
    it('should successfully add two peoples names', () => {
        const twoInLine = new circularList();
        
        twoInLine.addPlayer('Letter');
        twoInLine.addPlayer('Kenny');

        expect(twoInLine.head.next.next.value).toStrictEqual('Kenny');
        expect(twoInLine.head.next.value).toStrictEqual('Letter');
    });

});