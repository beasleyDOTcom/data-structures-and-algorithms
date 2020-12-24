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
        expect(reverseQueue(q)).toBe('nothing to reverse');
    });

    it('should ', () => {
        let q = new Queue();
        q.enqueue('a');
        q.enqueue('h');
        q.enqueue('a');
        q.enqueue('h');
        let reversed = reverseQueue(q);
        console.log(reversed)
        expect(join(reversed)).toBe('haha');
    });
});
