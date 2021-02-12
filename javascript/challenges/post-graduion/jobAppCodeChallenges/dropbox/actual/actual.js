function numKeypadSolutions(wordlist, keypads) {
    let result = [];
    for(let k = 0; k < keypads.length; k++){
        let keypad = keypads[k];
        let numberOfWords = 0;
        const obj = {};
        for(let j = 0; j< keypad.length; j++){
            obj[keypad[j]]=true;
        }
        //hash keypad into obj
        const mandatory = {}
        mandatory[keypad[0]] = true;
        // for every word
        for(let l = 0; l < wordlist.length; l++){
            let word = wordlist[l];
            let mandatoryPresent = false;
            for (let i = 0; i < word.length; i++) {
                if(mandatory[word[i]]!== undefined){
                    mandatoryPresent = true;
                }
                if(obj[word[i]] === undefined){
                    return;
                }
            }
            if(mandatoryPresent){
                numberOfWords++;
            }
        }
        result.push(numberOfWords);
    }
    return result;
}
//this is wordlist [ 'APPLE', 'PLEAS', 'PLEASE' ]