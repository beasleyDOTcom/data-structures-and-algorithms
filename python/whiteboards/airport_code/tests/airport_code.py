# story
"""
I thought of this idea when I couldn't sleep last night and thought about a whiteboard question of a friend, Steph Harper, and thought of an idea for a solution I wanted to try implementing:  
Imagine you want to build a new flight booking website and want to show all of the possible destinations for each departure. How would you try to have the fastest update of possible destinations for each key entered?
'a' --> atl, aus, abq, ama
'at' --> atl, ats, atw, aty
'atl' --> atl

I got to thinking of creating a hashtable recursively building each key so that 
"""
obj = {
    'a': {
        'at': {
            'atl': 'atl',
            'ats': 'ats',
            'atw': 'atw',
            'aty': 'aty'
        },

        'au': {
            'aus': 'aus'
        },


    }
}
"""
Now that I write this out, it occurs to me that this hashtable is going to be the same as implementing a k-ary tree.

Write a function that takes in an array of airport codes and returns a hashmap whose keys correspond to the airports codes that could be possible with that string with all of the possibilities for that string

Even though I'm going to write a recursive solution, I want to set this up as an implementation of Object Oriented Programming by initializing a Class called Airports that has a method called 
'add_one' that mutates the instance
'add_many' that accepts an array list and calls add_one for each airport code in the array list. 

"""

class Airports:
    def __init__(self):
        self.hash_map_of_airport_codes = {}

    def add_one(self, code):
        # mutate hashmap of airport codes
        self.hash_map_of_airport_codes[code] = code

    def add_many(self, array_list_of_airport_codes):
        # accepts an array list and calls add_one for each airport code in the array list.
        for code in array_list_of_airport_codes:
            self.add_one( code )
            

def airport_code(airport_codes_list):

    selection = Airports()
    selection.add_many(airport_codes_list)
    return selection

