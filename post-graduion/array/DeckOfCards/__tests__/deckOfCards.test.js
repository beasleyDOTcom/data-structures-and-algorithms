

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
        expect(same([...deck.cards], deck.shuffle())).toBeFalse();
    });
    it('should ', () => {
        expect(...deck.cards).not.toStrictEqual(deck.shuffle())
    });
});

describe('.remove() method', () => {
    const testDeck = new Deck();
    deck.add('check into cash');
    deck.add('olympics');
    deck.add('emergen-c')
    deck.add('pay pal')
    it('should reduce length by 1', () => {
        expect(deck.remove(2)).toStrictEqual('emergen-c');
        expect(deck.cards).toHaveLength(3);
    });
    it('should remove an item and preserve relative of other elemenths', () => {
        expect(deck.cards[2]).toStrictEqual('pay pal');
        expect(deck.cards[1]).toStrictEqual('olympics');
    });
});