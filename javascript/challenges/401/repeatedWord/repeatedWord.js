'use strict';

function removePunc (string){
let regex = /[@()!,?."]/g
let noPunc = string.split(regex);

 return noPunc.map(word =>{
   return word.split(' ')
}).flat()
}



 class Hashtable {

  constructor(size=1024) {
    this.buckets = new Array(size);
  }

  add(key, value) {
    if(key === ''){ 
      console.log('founda space ') 
      return
       }
    const index = this.hash(key);
    const contentsOfBucket = this.buckets[index];
    if(contentsOfBucket === undefined) {
      this.buckets[index] = [ [key, value] ];
    } else if(contentsOfBucket){

      for(let item of contentsOfBucket) {
        if(item[0] === key) {
          return key;
        }
      }
    }
  }

  get(key) {

    const index = this.hash(key);

    const itemsInBucket = this.buckets[index];

    if(itemsInBucket) {

      for(let item of itemsInBucket) {
        if(item[0] === key) {
          return item[1];
        }
      }
    }

    return null;
  }
  

  contains(key) {
    const index = this.hash(key);

    if(this.buckets[index] === undefined) {
      return false;
    }

    return true;
  }

  hash(key) {

    let sum = 0;

    for(let char of key) {
      sum += char.charCodeAt(0);
    }

    const primed = sum * 599;

    const index = primed % this.buckets.length;

    return index;

  }
    findFirstMatch(string){
    let puncless = removePunc(string);
    let firstWord = '';
      for(let i = 0; i<puncless.length; i++){
        puncless[i] = puncless[i].toLowerCase();
      if(!this.contains(puncless[i])){

       this.add(puncless[i], puncless[i])
      }
      else if(this.contains(puncless[i])){
       return puncless[i];
      }
      }

    return firstWord;
  }
}

let jimmyjames = new Hashtable(256);
let funky2Death = jimmyjames.findFirstMatch("it was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...")

console.log(funky2Death, 'not undefined')


module.exports = Hashtable;
