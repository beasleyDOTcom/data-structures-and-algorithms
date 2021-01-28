

const Deck = require('../deckOfCards.js');

const deck = new Deck();

describe('.add()', () => {
    it('should add cards to the "deck"', () => {
    deck.add('tools');
    deck.add('sheers');
    deck.add('people');
    deck.add('myspace');
    deck.add('soundCloud');
    deck.add('paypal');
    expect(deck.cards[0]).toStrictEqual('tools');
    expect(deck.cards[5]).toStrictEqual('paypal');       
    });
});

describe('.shuffle() method', () => {
    function hasSameElements(a, b){
        let seen = new Set();
        a.forEach(element => seen.add(element))
        for(let i = 0; i< a.length; i++){
            if(!seen.has(b[i])){
                return false;
            }
        }
        return true;
    }
    function same(a, b){
        for(let i = 0; i < a.length; i++){
            if(a[i] !== b[i]){
                return false
            }
        }
        return true;
    }
    const arr = [1, 4, 3, 2];
    
    it('should not return same array', () => {
        let original = [...deck.cards];
        deck.shuffle();
        expect(same(original, deck.cards)).toBeFalsy();
    });
    it('should return array of same length', () => {
        let original = [...deck.cards];
        deck.shuffle();
        expect(original).not.toStrictEqual(deck.cards);
    });
    it('should still have all the original elements in new array', () => {
        let original = [...deck.cards];
        deck.shuffle();
        expect(hasSameElements(original, deck.cards)).toBeTruthy();
    });
    it('should return false without same elements', () => {
        let original = [...deck.cards];
        deck.shuffle();
        deck.remove(1);
        deck.add('THIS SHOULD NOT EXIST HERE');
        expect(hasSameElements(original, deck.cards)).toBeFalsy();
        expect(hasSameElements(deck.cards, original)).toBeFalsy();
    });
});

describe('.remove() method', () => {
    const testDeck = new Deck();
    testDeck.add('check into cash');
    testDeck.add('olympics');
    testDeck.add('emergen-c')
    testDeck.add('pay pal')
    it('should reduce length by 1', () => {
        expect(testDeck.remove(2)).toStrictEqual('emergen-c');
        expect(testDeck.cards).toHaveLength(3);
    });
    it('should remove an item and preserve relative of other elemenths', () => {
        expect(testDeck.cards[2]).toStrictEqual('pay pal');
        expect(testDeck.cards[1]).toStrictEqual('olympics');
    });
    it('should remove all elements from testDeck.cards', () => {
        testDeck.remove(0);
        testDeck.remove(0);
        testDeck.remove(0);
    expect(testDeck.cards).toHaveLength(0);        
    });
});