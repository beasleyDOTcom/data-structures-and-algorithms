Joshua Beasley Whiteboard Interview with David Dicken	1/5/2021
Problem Domain:
given a linked list find the minimum value iteratively

Input / Output:
input: 4 -> 22 -> 44 -> 99 -> 2 → 7 → null
output: 2

Algorithm:
intialize a variable called min to the first value of linked list. 
look through whole list comparing min to current value. 
	if current value is less than min, min = current value.
	else move on until current node = null;
min = 2
Pseudocode: 
function findMin(linkedList)
	if(linkedList.head === null){ return null }
let min = linkedList.head.value
	
	let currentNode = linkedList.head.next;
	while(currentNode !== null){
		if(currentNode.value < min){
			min = currentNode.value;
}
currentNode = currentNode.next;
}
return min;
}

Big O:
Time: O(n)
Space: O(1)

Testing/edge cases:
list of same values returns first value
list of non comparable values alphabet and numbers etc.
