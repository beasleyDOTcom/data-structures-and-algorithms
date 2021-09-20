from . longest_substring import longest_substring

"""
Given a string s, find the length of the longest substring without repeating characters.

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
"""
def test_one():
    s = "abcabcbb"
    expected = 3
    actual = longest_substring(s)
    assert actual == expected

def test_two():
    s = "bbbb"
    expected = 1
    actual = longest_substring(s)
    assert actual == expected

def test_three():
    s = "pwwkew"
    expected = 3
    actual = longest_substring(s)
    assert actual == expected

def test_symbols():
    s = '#@$%@$@@%./'
    expected = 4
    actual = longest_substring(s)
    assert actual == expected

def test_post():
    s = "dvdf"
    expected = 3
    actual = longest_substring(s)
    assert actual == expected