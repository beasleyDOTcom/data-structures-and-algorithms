# repeated words:
Write a function that accepts a lengthy string parameter.
Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

# BIG O
big O of time: Every string gets read at least n times and then depending on when or if a match occurs it could be as much as O of n*2. 
big O of space: every word in a string get's split into a index of an array, and then reassigned to a hash table until a matching word is found which could also be as much as O of n*2.

# link to whiteboard:
https://app.conceptboard.com/board/95gg-p1xo-gz8n-3fhu-g6c9