'use strict'

class Hashtable {
    constructor(size = 1024) {
        this.buckets = new Array(size);
        this.count = 0;
    }

    add(key, value) {
        const index = this.hash(key);
        const contentsOfBucket = this.buckets[index];
        if (contentsOfBucket === undefined) {
            this.buckets[index] = [[key, value]];

            // this.buckets[index].push([key, value])
        } else {
            //what to do if there is someone already there
            contentsOfBucket.push([key, value])
        }


    }
    get(key) {
        const index = this.hash(key);
        console.log('the index of ', key, 'is ', index)
        const itemsInBucket = this.buckets[index];
        if (itemsInBucket === undefined) {
            return null;
        }
        else {

            for (let item of itemsInBucket) {
                if (item[0] === key) {
                    return item[1];
                }
            }

        }
    }
    findCollision(key) {
        console.log(this.hash(key))
    }
    contains(key) {
        //takes in unhashed key and return boolean
        if (this.get(key) === undefined) {
            return false;
        }
        else {
            return true;
        }
    }

    hash(key) {
        let chars = 0;
        for (let i = 0; i < key.length; i++) {
            console.log('chars is ', chars)
// I HAD TO COMMENT OUT THE END OF LINES 57 AND 60 IN ORDER TO TEST THE HANDLING OF COLLISIONS
            if(key.charCodeAt(i) === 0){
                chars += 601;
            }
            else if (i % 2 === 0) {
                chars += key.charCodeAt(i) * i;
            }
            else {
                chars += key.charCodeAt(i) * i * i;
              
            }
            console.log('chars is now: ', chars)
        }
        chars = chars * 599;

        return chars % this.buckets.length - 1;
        //takes a string and returns an integer within the scope of array. 

    }

}


module.exports = Hashtable;