    
"""
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

algorithm
create hashmap of nums array so that the key represents the value at the values' index and the value of the associated key is the index of it's location in the nums array.
then look at each number one at a time and see if the object has a key that is the difference between the target and the current number.. if so return the index (value) of that key and you have a solution.
 
"""
def two_sum(nums, target):
    hash_map = {}
    for index in range(len(nums)):
        hash_map[nums[index]] = index

    for idx in range(len(nums)):
        num = nums[idx]
        difference = target - num
        answer = hash_map.get(difference, False)
        if answer != False:
            # than we have a match
            return [idx, answer]

    
    
    
    
