"""
Problem Domain: we want to accept a string and return the longest substring that can be made without repeating chars.
Algorithm:
increment count while no duplicate is found.
if duplicate is found,
update longest with count and then reset count.
else keep incrementing.

"""
def longest_substring(s):
    longest = 0
    count = 0
    index = 0
    dictionary = {}
    if len(s) > 1:
        while index < len(s):
            if dictionary.get(s[index], False):
            # "pwwkew"
                # current index of s is a duplicate. Update if you need to.
                if count > longest:
                    longest = count

                # reset
                count = 1 # start at one since you have looked at that char
                dictionary = {}
                dictionary[str(s[index])] = True
            else:
                # no duplicate has been found and we may increment count and index
                dictionary[str(s[index])] = True
                count += 1
            print('index: ', index, 'char: ', s[index] , 'count: ', count)
            index += 1

    else:
        # string has one or less char. return 0 or 1
        return len(s)
    if count > longest:
        longest = count

    return longest


        
    
