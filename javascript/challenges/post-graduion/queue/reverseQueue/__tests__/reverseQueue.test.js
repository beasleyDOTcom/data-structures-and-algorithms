const Queue = require('../../sumQueue/queue.js');
const reverseQueue = require('../reverseQueue.js');
function join(queue){
    let string = '';
    while(!queue.isEmpty()){
        string += queue.dequeue();
    }
    return string;
}

describe('this should test that the queue is successfuly reversed', () => {
    it('should expect a b c d e to be e d c b a', () => {
        let q = new Queue();
        q.enqueue('a');
        q.enqueue('b');
        q.enqueue('c');
        q.enqueue('d');
        q.enqueue('e');
        expect(q.dequeue()).toBe('a');
        let answer = reverseQueue(q);
        
        expect(answer.dequeue()).toBe('e');
        expect(answer.dequeue()).toBe('d');
    });

    it('should return "nothing to reverse" if queue is empty', () => {
        let q = new Queue();
        expect(reverseQueue(q)).toBe('Nothing to reverse');
    });

    it('should ', () => {
        let q = new Queue();
        q.enqueue('a');
        q.enqueue('h');
        q.enqueue('a');
        q.enqueue('h');
        let reversed = reverseQueue(q);
        expect(join(reversed)).toBe('haha');
    });
    it('should return 1,2,3,4,5 if given 5, 4, 3, 2, 1 ', () => {
        let q = new Queue();
        q.enqueue(5)
        q.enqueue(4)
        q.enqueue(3)
        q.enqueue(2)
        q.enqueue(1)
        let reversed = reverseQueue(q);
        expect(reversed.dequeue()).toStrictEqual(1);
        expect(reversed.dequeue()).toStrictEqual(2);
        expect(reversed.dequeue()).toStrictEqual(3);
        expect(reversed.dequeue()).toStrictEqual(4);
        expect(reversed.dequeue()).toStrictEqual(5);
    });
    it('should handle queue with one item', () => {
        let q = new Queue();
        q.enqueue(1);
        let reversed = reverseQueue(q);
        expect(reversed.front.value).toStrictEqual(1);
        expect(q.dequeue()).toStrictEqual(1);
    });

});
