import re
# return the most common word in a string
# if tied, return the first word to reach the equal number of words
# punctuation is not included in a word
# expects input string to be of any case, but expects output to be lowercase

# algorithm:
"""
split string on space
for each word, 
    remove punctuation
        regex match so that there's only word characters (a-zA-Z)
    then check if word has been seen before:
        if yes, increment this words counter
        if not, initialize this key with a value of 1

    compare current word's count with bestYet 
        if it's greater than bestYet, replace bestYet.
        else move on to next word

    return bestWord

    Big O 
        space: O(n)
        time: O(1)
"""


def most_common_word(string):

    bestWord = ''
    bestCount = 0
    
    visitedWords = {}

    words = string.split()

    for word in words:
        lowercaseWord = word.lower()
        withoutPunc = re.sub('\W', '', lowercaseWord)
        
        if visitedWords.get(withoutPunc, False) != False:
            visitedWords[withoutPunc] += 1
        else:
            visitedWords[withoutPunc] = 1
        
        if visitedWords[withoutPunc] > bestCount:
            bestCount = visitedWords[withoutPunc]
            bestWord = withoutPunc

    return bestWord




    


    
