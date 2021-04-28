class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        numEven = 0
        for number in nums:
            if len(str(number)) % 2 == 0:
                numEven += 1
                
        return numEven