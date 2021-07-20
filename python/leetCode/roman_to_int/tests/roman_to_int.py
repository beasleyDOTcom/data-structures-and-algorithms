"""
Ok, so we want to take in a roman numeral and return its' relative integer.

constraints:
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

algorithm

split string on every char
keep track of:
    a running total (which you will return) that starts at index 0.
    a current that will start at index 1
    and i, that will start at 1
     
initialize running total, and previous_roman with first index of s(o)
i = 1
initialize current with value at index 1 of s
roman_to_int = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,
}
dict = {
    'X' : 'I',
    'V' : 'I',
    'L' : 'X',
    'C' : 'X',
    'D' : 'C',
    'M' : 'C',
}
while i < len(s):
    if dict.get(current) == previous_roman:
        # you have reached a case in which you need to subtract previous and current-previous from running total 'IV'
    else :
        running_total += roman_to_int[current]

    i += 1
    previous_roman = current
    current = s[i]

then return running_total
"""


def roman_to_int( s):

    roman_to_int = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }
    dict = {
        'X' : 'I',
        'V' : 'I',
        'L' : 'X',
        'C' : 'X',
        'D' : 'C',
        'M' : 'C',
    }
#     a running total (which you will return) that starts at index 0.
#     a current that will start at index 1
#     and i, that will start at 1
     
# initialize running total, and previous_roman with first index of s(o) 
    i = 1
    running_total = roman_to_int[s[0]]
    previous_roman = s[0]

# initialize current with value at index 1 of s
    while i < len(s):
        current = s[i]
        if dict.get(current, False) == previous_roman:
            # you have reached a case in which you need to subtract previous and current-previous from running total 'IV'
            running_total -= (roman_to_int[previous_roman])*2
            running_total += roman_to_int[current]
        else:
            running_total += roman_to_int[current]

        i += 1
        previous_roman = current

    return running_total
