class Deck{
    constructor(){
        this.cards = [];
    }
    add(val){
        return this.cards.push(val)
    }
    remove(index){
        const element = this.cards.splice(index,1);//returns array of element
        return element[0];
    }
    shuffle(){
// the shuffle in place by calling swap on every index of this.cards arr with a random index 
        const getIndex = () => Math.floor(Math.random()*this.cards.length)
        const swap = (arr, a, b) => {
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
            return arr;
        }
        for(let i = 0; i < this.cards.length; i++){
            swap(this.cards, i, getIndex())
            swap(this.cards, i, getIndex())
        }
    }
}
module.exports = Deck;