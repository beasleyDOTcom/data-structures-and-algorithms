'use strict'
function isValidSubsequence(array, sequence) {
	let counter = 0;
	for(let i = 0; i < array.length; i++){
		if(array[i]===sequence[counter]){
			counter += 1;
		}
	}
	return counter === sequence.length;
}

module.exports = isValidSubsequence
