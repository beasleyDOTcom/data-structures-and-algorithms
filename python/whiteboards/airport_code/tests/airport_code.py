# story
"""
I thought of this idea when I couldn't sleep last night and thought about a whiteboard question of a friend, Steph Harper, and thought of an idea for a solution I wanted to try implementing:  
Imagine you want to build a new flight booking website and want to show all of the possible destinations for each departure. How would you try to have the fastest update of possible destinations for each key entered?
'a' --> atl, aus, abq, ama
'at' -->  atl, ats, atw, aty  
'atl' --> atl

I got to thinking of creating a hashtable recursively building each key so that 

"""
obj = {
    'a' : ['atl', 'ats', 'atw', 'aty', 'aus'],
    'at': ['atl', 'ats', 'atw', 'aty'],
    'ats': 'ats'
}
# obj = {
#     'a': {
#         'at': {
#             'atl': 'atl',
#             'ats': 'ats',
#             'atw': 'atw',
#             'aty': 'aty'
#         },

#         'au': {
#             'aus': 'aus'
#         },


#     }
# }
"""
Now that I write this out, it occurs to me that this hashtable is going to be the same as implementing a k-ary tree.

Write a function that takes in an array of airport codes and returns a hashmap whose keys correspond to the airports codes that could be possible with that string with all of the possibilities for that string

Even though I'm going to write a recursive solution, I want to set this up as an implementation of Object Oriented Programming by initializing a Class called Airports that has a method called 
'add_one' that mutates the instance
'add_many' that accepts an array list and calls add_one for each airport code in the array list. 

"""
# Algorithm for add_one:
# 1. call helper with initial object, code, 0, and ''
# 2. setup base case for helper()
# 3. if this location doesn't exist, initialize it as an empty object
# 4. else this has been seen and we want to add another address to it's child
    # 5. instantiate new object to modify before adding it to hash_map_of_airport_codes

class Airports:
    def __init__(self):
        self.hash_map_of_airport_codes = {}

    def add_one(self, code):
        # mutate hashmap of airport codes:

        def _helper(obj, code, index, key):
# 2. setup base case for helper()
            if index == 2:
                obj[code] = code
                return
            else:
                key += code[index]
# 3. if this location doesn't exist, initialize it as an array list with key in it
                if obj.get(key, False) == False:
                    #initialize
                    obj[key] = [code]
# 4. else this has been seen and we want to add another address to it's array list
                else:
                    obj[key].append(code)

                _helper(obj, code, index + 1, key)
                    
# 1. call helper with initial object, code and 0
        _helper(self.hash_map_of_airport_codes, code, 0, '')

        
    def add_many(self, array_list_of_airport_codes):
        # accepts an array list and calls add_one for each airport code in the array list.
        for code in array_list_of_airport_codes:
            self.add_one( code )
            

def airport_code(airport_codes_list):

    selection = Airports()
    selection.add_many(airport_codes_list)
    return selection

"""

Microsoft Leap --> floor 2 tables 1 and 2
--->>> tell your story! What lead you hear? 

ekata --> floor 3  table 1 scott bang . Identity verification --> is this a safe transaction? recently acquaried by mastercard. Global company offices but headquarted in Seattle. 
self awareness 
iterative improvement.. sometimes putting people in roles they don't know how to do yet. 
good general questions for companies? --> what are your performance reviews like?

trying --> trying to solve a problem on your own and learning from that
being okay with looking yourself in the mirror having failed and get up and try again. 
in seattle.. 
your functional skills are only so valuable
Networking is your inroad 

an implementation whose direction doesn't really work towards the end solution I want
   def _helper(obj, code, index, key):
# 2. setup base case for helper()
            if index == 2:
                obj[key] = code
                return
            else:
# 3. if this location doesn't exist, initialize it as an empty object
                if obj.get(code[index], False) == False:
                    #initialize
                    obj[code[index]] = {}
                    _helper(obj[code[index]], code, index + 1)
# 4. else this has been seen and we want to add another address to it's child
                else:
                    temp = {}
                    # don't overwrite by adding new path
                    _helper(temp, code, index + 1)
                    print('ho hoho', obj)
                    obj[code[index]].update({temp})
                    
# 1. call helper with initial object, code and 0
        _helper(self.hash_map_of_airport_codes, code, 0, '')

"""