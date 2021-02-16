'use strict';

// Complete the staircase function below.
function staircase(n) {
    let string = '';
    if(n === 0){
        return string;
    } else if (n === 1){
        string = ' #';
        return string;
    } else {// n > 1
        function addSpace(number){
            let space = '';
            for(let i = 0; i < number; i++){
                space += ' ';
            }
            return space;
        }
        function addHash(number, str){
            for(let i = 1; i < number; i++){
                str = str +'#';
            }
            return str;
        }
        string = addSpace(n-1)+'#';
        for(let i = 2; i<= n; i++){
            string = string +'\n'+addSpace(n-i) + addHash(i, '#');
        }
    }
    return string;
}