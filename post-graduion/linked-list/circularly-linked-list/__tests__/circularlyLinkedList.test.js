'use strict';

const CircularList = require('../circularlyLinkedList.js');

describe('The goal of this suite is to determine the successful adding of a name to a circularly linked list via the addPlayer() method. ', () => {
    it('Should add a node to a linked list when given a value.', () => {
        const getInLine = new CircularList();
        getInLine.addPlayer('Cat');
        expect(getInLine.head.value).toStrictEqual('Cat');
        expect(getInLine.head.next.value).toStrictEqual('Cat');
    });
    it('should successfully add two peoples names', () => {
        const twoInLine = new CircularList();
        
        twoInLine.addPlayer('Letter');
        twoInLine.addPlayer('Kenny');

        expect(twoInLine.head.next.next.value).toStrictEqual('Kenny');
        expect(twoInLine.head.next.value).toStrictEqual('Letter');
    });
});

describe('This suite tests the functionality of the removePlayer() method of CircularList', () => {
    
    const names = new CircularList();

    it('should return null when calling removePlayer() on an empty list', () => {
        expect(names.removePlayer('Megan')).toBeNull();
    });

    it('should return "Player Not Found" when called with a name that is not present in list.', () => {
        names.addPlayer('Megan');
        names.addPlayer('Stephen');
        names.addPlayer('Beasley');
        expect(names.removePlayer('Tia')).toStrictEqual('Player Not Found')     
    });
    it('should return "Removed {player} from List" when name is present in list.', () => {
        names.addPlayer('Allie');
        names.addPlayer('Collin');
        expect(names.removePlayer('Stephen')).toStrictEqual('Removed Stephen from List')
    });
    it('should remove person when one person is in list', () => {
        const one = new CircularList();
        one.addPlayer('Jimmie');
        expect(one.removePlayer('Jimmie')).toStrictEqual('Removed Jimmie from List');
        expect(one.head).toBeNull();
    });
    it('should handle an list with two items in which first item is target', () => {
        const two = new CircularList();
        two.addPlayer('David');
        two.addPlayer('Paul');
        expect(two.removePlayer('Paul')).toStrictEqual('Removed Paul from List');
        expect(two.head.value).toStrictEqual('David');
    });
    it('should handle list with two items in which second item is target', () => {
        const two = new CircularList();
        two.addPlayer('David');
        two.addPlayer('Paul');
        expect(two.removePlayer('David')).toStrictEqual('Removed David from List');
        expect(two.head.value).toStrictEqual('Paul');
    });
});