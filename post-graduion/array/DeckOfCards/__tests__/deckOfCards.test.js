const Deck = require('../deckOfCards.js');

const cards = new Deck();

describe('prove the ability to simulate a deck of cards', () => {
    it('should add cards to the "deck"', () => {
    cards.add('tools');
    cards.add('sheers');
    cards.add('people');
    cards.add('myspace');
    cards.add('soundCloud');
    cards.add('paypal');
    expect(cards[0])        
    });
});
describe('shuffle', () => {

    function same(a, b){
        for(let i = 0; i < a.length; i++){
            if(a[i] !== b[i]){
                return false
            }
        }
        return true;
    }

    it('should not return same array', () => {
        
    });
});