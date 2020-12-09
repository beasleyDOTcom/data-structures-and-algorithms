// Joshua Beasley Whiteboard Interview with Tia Low
// Problem Domain:
// write a function that accepts an integer and returns the nth number in the fibonacci sequence
// 0,1,1,2, 3, 5, 8, 13
// input: 5
// output : 3
// fibonacci sequence is the sum of the previous two numbers. 
// Algorithm:
// define an array with original numbers in it.
//  - if n is less than 3 return array at n; 
// push fibonnaci number to array until it is N long
//  - start a while loop that will run until array is n long
//  * let sum = arr[arr.length-1] + arr[arr.length-2];
//  * arr.push(sum)

// return Nth number
// 0,1,1,2, 3, 5, 8, 13
// [0,1,1,2,3]
// Pseudocode:
function addUp(int){
    if(int<1){ return 'not a fibonacci number! Please enter an integer equal to or higher than 1'}
	let arr = [0,1,1];
	if(int < 3){
		return arr[int]
	} else {
		while(arr.length < int){
			let sum = arr[arr.length -1] + arr[arr.length-2];
			arr.push(sum);
}
return arr[int - 1];
	}
}


// Big O: 
// Time: O(n)
// Space: O(n)
// Testing
// what about negative numbers?

// if(int<1){ return 'not a fibonacci number! Please enter an integer equal to or higher than 1}
module.exports = addUp;