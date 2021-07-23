from . two_sum import two_sum

def test_first():
    nums = [2,7,11,15]
    target = 9
    expected = [0, 1]
    actual = two_sum(nums, target)
    assert actual == expected


def test_second():
    nums = [3,2,4]
    target = 6
    expected = [1,2]
    actual = two_sum(nums, target)
    assert actual == expected
    

def test_first():
    nums = [3,3]
    target = 6
    expected = [0, 1]
    actual = two_sum(nums, target)
    assert actual == expected
    
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
 
"""