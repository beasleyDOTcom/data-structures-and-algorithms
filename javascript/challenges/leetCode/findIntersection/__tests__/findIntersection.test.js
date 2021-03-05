'use strict';

const findIntersection = require('../findIntersection.js');

class Node{
    constructor(value, next= null){
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null;
    }
    add(val){
      this.head = new Node(val, this.head)
    }
  }
  const linked = new LinkedList();
  linked.add(1);
  linked.add(2);
  linked.add(3);
  linked.add(4);
  
  const listA = new LinkedList();
  listA.add(linked.head)
  listA.add(11);
  listA.add(22);
  
  const listB = new LinkedList();
  listB.add(linked.head)
  listB.add(33);
  listB.add(44);
  listB.add(55);
  listB.add(66);

  const listC = new LinkedList();
  listC.add(1);
  listC.add(2);
  listC.add(3);
  
  const listD = new LinkedList();
  listD.add(4);
  listD.add(5);
  

  describe('return the node at intersection of two linked lists', () => {
      it('should return null if lists do not intersect', () => {
        expect(findIntersection(listC, listD)).toBeNull();     
      });
      it('should return node at intersection', () => {
        expect(findIntersection(listA, listB)).toBe(linked.head);     
      });
  });