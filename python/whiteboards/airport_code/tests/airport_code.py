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

Write a function that takes in an array of airport codes and returns a hashmap whose keys correspond to the airports codes that could be possible with that string with all of the possible 

"""

def airport_code(string):

