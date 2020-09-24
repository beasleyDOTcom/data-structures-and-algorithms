const HashTable = require('../../hashtable/hashtable.js');
const leftJoin = require('../leftJoin.js');

it('should live', () => {
    const leftHash = new Hashtable(3);
    const rightHash = new HashTable(3);
// table.findCollision('tac');
// table.findCollision('cat')
    leftHash.add('fond', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('diligent', 'employed');

    rightHash.add('fond', 'averse');
    rightHash.add('wrath', 'delight');
    rightHash.add('flow', 'jam');

expect(leftJoin(leftHash, rightHash)).toBe([['fond, enamored', 'averse'],['wrath', 'anger', 'delight'], ['diligent', 'employed']])

});
