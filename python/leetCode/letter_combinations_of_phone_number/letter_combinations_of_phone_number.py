class Solution(object):
   
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        result = []
        if digits == None or len(digits) == 0:
            return result
        phoneMap = {}
        phoneMap['2'] = 'abc'
        phoneMap['3'] = 'def'
        phoneMap['4'] = 'ghi'
        phoneMap['5'] = 'jkl'
        phoneMap['6'] = 'mno'
        phoneMap['7'] = 'pqrs'
        phoneMap['8'] = 'tuv'
        phoneMap['9'] = 'wxyz'
        
        
        def getCombinationsRecursive(result, digits, current, index, phoneMap):
            
            if index == len(digits):
                result.append(current)
                return
            
            lettersFromNumber = phoneMap[digits[index]]
            for letter in lettersFromNumber:
                getCombinationsRecursive(result, digits, current+letter, index + 1, phoneMap)
        
        getCombinationsRecursive(result, digits, '', 0, phoneMap)
        return result