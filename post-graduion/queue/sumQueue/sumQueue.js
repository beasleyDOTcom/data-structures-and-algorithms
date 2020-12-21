function sumQueue(q) {
    if (q.isEmpty()) { return 'queue was empty'; }
    let sum = 0;
    q.enqueue('end');
    
    while (q.peek() !== 'end') {
        let temp = q.dequeue();
        sum += temp;
        q.enqueue(temp);
    }
    q.dequeue();
    return sum;
}


module.exports = sumQueue;