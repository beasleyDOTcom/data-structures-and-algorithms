
def disem_vowel(string):
    resultString = ''
    vowels = {}
    vowels['a'] = True
    vowels['A'] = True
    vowels['e'] = True
    vowels['E'] = True
    vowels['i'] = True
    vowels['I'] = True
    vowels['o'] = True
    vowels['O'] = True
    vowels['u'] = True
    vowels['U'] = True
    for i in range(len(string)):
        if not vowels.get(string[i], False):
            resultString += string[i]
            
    return resultString
               
