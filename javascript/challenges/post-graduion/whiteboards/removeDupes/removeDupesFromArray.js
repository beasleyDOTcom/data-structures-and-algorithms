/*
Whiteboard with Tia
Problem domain:
given an array, remove all of the duplicate values -- iteratively.

input / output:
array of numbers
mutate original array to return array without dupes.
input: [1,3,4,1,2,3,4,2]
output: [1,3,4,2]
[1,3,4,2,3,4]
Algorithm:
look at every element of array.
if element is in seen set then splice that element out of array. 
else add element to seen set and move on to next element.
seen set = [1,3,4,2]
i = 4;
code:
*/
function removeDupes(arr) {
	let seen = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (seen.has(arr[i])) {
			while (seen.has(arr[i])) {
				arr.splice(i, 1);
			}
			if (!seen.has(arr[i])) { 
				seen.add(arr[i]) 
			}
		} else {
			seen.add(arr[i]);
		}
	}
	return arr;
}
module.exports = removeDupes;
/*
Testing: so try to walk through this equation and mess it up so that I an bolster its' ability to handle various situations.

Big O:
time: O(n)
space: O(n)
obj[1] === undefined ? return false : return true;
*/