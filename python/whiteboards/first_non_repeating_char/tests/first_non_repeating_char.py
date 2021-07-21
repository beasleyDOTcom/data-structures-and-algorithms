
"""
  Write a function that takes in a string of lowercase English-alphabet letters
  and returns the index of the string's first non-repeating character.

  
  The first non-repeating character is the first character in a string that
  occurs only once.

  
  If the input string doesn't have any non-repeating characters, your function
  should return -1.

Example:
input
string = "abcdcaf"

output
1 // the first non-repeating char is 'b' and is at the [1] index

two ideas come to mind:

1. look at each char in order and see if it exists in hashmap
if it does, remove that char from list.
if not, than you've found a duplicate
'a': 2
'b': 1
'c': 2
'd': 1
'f': 1

algorithm:

look at each char in string one at a Time checking if it exists in the dictionary
if yes, increment value of Key
if not, intialize key with value of 1.
and initialize key in indexOfChar dictionary with current index.

then I want to gather all the keys into a list
then look at each key in dictionary if it has a value greater than 1 move on. 
the first character you check that has a value of 1 is the first character that does not repeat.

"""

def first_non_repeating_char(string):
  times_seen = {}
  index_of_char = {}
# look at each char in string one at a Time checking if it exists in the dictionary
  for index in range(len(string)):
    char = string[index]
    if times_seen.get(char, False):
      # if yes, increment value of Key times_seen[char]
      times_seen[char] += 1
    else:
      # if not, intialize key with value of 1.
      times_seen[char] = 1
      # and initialize key in indexOfChar dictionary with current index.
      index_of_char[char] = index

  list_of_keys = times_seen.keys()
  # then I want to gather all the keys into a list
  # then look at each key in dictionary if it has a value greater than 1 move on. 
  for key in list_of_keys:
    if times_seen.get(key, False) == 1:
      return index_of_char[key]
  # the first character you check that has a value of 1 is the first character that does not repeat.

  return -1



"""
solution code from org via steph:

# O(n) time | O(1) space - where n is the length of the input string. 
# The constant space is because the input string only has lowercase
# English-alphabet letters; thus, our hash table will never have more
# than 26 character frequencies.

def firstNonRepeatingCharacter(string):
    characterFrequencies = {}
	
	for character in string:
		characterFrequencies[character] = characterFrequencies.get(character, 0) + 1
		
	for idx in range(len(string)):
		character = string[idx]
		if characterFrequencies[character] == 1:
			return idx
		
    return -1

"""
