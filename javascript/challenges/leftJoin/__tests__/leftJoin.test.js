const Hashtable = require('../hashtable.js');
const leftJoin = require('../leftJoin.js');

it('should live and have mixed results', () => {
    const leftHash = new Hashtable(3);
    const rightHash = new Hashtable(3);
// table.findCollision('tac');
// table.findCollision('cat')
    leftHash.add('fond', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('diligent', 'employed');

    rightHash.add('fond', 'averse');
    rightHash.add('wrath', 'delight');
    rightHash.add('flow', 'jam');

expect(leftJoin(leftHash, rightHash)).toStrictEqual([[ 'diligent', 'employed', null ],[ 'fond', 'enamored', 'averse' ],[ 'wrath', 'anger', 'delight' ]])
});


it('should left join without any null', () => {
    const leftHash = new Hashtable(3);
    const rightHash = new Hashtable(3);

    leftHash.add('fodder', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('inteligent', 'employed');

    rightHash.add('fodder', 'averse');
    rightHash.add('wrath', 'delight');
    rightHash.add('inteligent', 'jam');

expect(leftJoin(leftHash, rightHash)).toStrictEqual([ [ 'fodder', 'enamored', 'averse' ], [ 'wrath', 'anger', 'delight' ] ])
});

it('should end each array with null', () => {
    const leftHash = new Hashtable(3);
    const rightHash = new Hashtable(3);

    leftHash.add('pam', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('diligent', 'unemployed');

    rightHash.add('fond', 'averse');
    rightHash.add('pam', 'delight');
    rightHash.add('flowers', 'jam');

expect(leftJoin(leftHash, rightHash)).toStrictEqual([ [ 'diligent', 'unemployed', null ], [ 'wrath', 'anger', null ] ])
});