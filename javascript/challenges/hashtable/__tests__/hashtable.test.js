const Hashtable = require('../hashtable');

// it('should ', () => {
//     const table = new Hashtable();
//     table.add('apple', 'pippin');
//     const index = table.hash('apple');
//     const value = table.buckets[index];
//     expect(value).toBe('pippin');
// });

it('get correct value', () => {
    const table = new Hashtable();
    table.add('apple', 'pippin');
    const value = table.get('apple');
    expect(value).toBe('pippin');
});

it('get correct value', () => {
    const table = new Hashtable();
    table.add('face', 'palm');
    const value = table.get('face');
    expect(value).toBe('palm');
});

it('should Successfully return null for a key that does not exist in the hashtable', () => {
    const table = new Hashtable();
    table.add('untruthy', 'lawyer');
    expect(table.get('face')).toBeNull();
});

it('it should Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const table = new Hashtable();
    // table.findCollision('tac');
    // table.findCollision('cat')
    table.add('tac','first in hashtable');
    table.add('cat', 'second in hash table')
    expect(table.get('tac')).toBe('first in hashtable');
    expect(table.get('cat')).toBe('second in hash table')
});

// it('it should Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
//     const table = new Hashtable(3);
//     table.add(2,'first in hashtable');
//     table.add(2, 'second in hash table')
//     expect(table.get('tac')).toBe('first in hashtable');
//     expect(table.get('cat')).toBe('second in hash table')
// });

it('should Successfully hash a key to an in-range value', () => {
    const table = new Hashtable(3);
    expect(table.hash('taco cat')).toBeLessThanOrEqual(3);
});

