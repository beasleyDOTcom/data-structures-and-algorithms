"""
Edge Cases:
one char 7 
two char 11 / 10

Algorithm:
convert to string
split string into an array of every char
check if front is same as back until entire word is viewed
if chars are not same at any iteration, return False

if it has odd numbers 121 no need to check last char
if it has even numbers 1221 loop will stop once they cross and will return True

"""


def int_is_palindrome(number):
    string = str(number)
    arr = [char for char in string]
    front = 0
    back = len(arr)-1

    while front < back:
        if arr[front] != arr[back]:
            return False
        else:
            front += 1
            back -= 1

    return True
    
