"""
A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:
Input: sentence = "leetcode"
Output: false
 
Constraints:
1 <= sentence.length <= 1000
sentence consists of lowercase English letters.

# algorithm:

iterate through string 
if char has been seen do nothing
else add char to result string

if string.length == 26 return true : false

"""

def pan_gram(string):
    result = ''
    for char in string:
        if char not in result:
            result += char

    if len(result) == 26:
        return True
    else:
        return False

def another(string):
    return len(set(string)) == 26