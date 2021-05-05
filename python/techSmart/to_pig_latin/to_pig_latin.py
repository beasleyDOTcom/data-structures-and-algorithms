def to_pig_latin(string):
  is_vowel = {}
  is_vowel['a'] = True
  is_vowel['A'] = True
  is_vowel['E'] = True
  is_vowel['e'] = True
  is_vowel['i'] = True
  is_vowel['I'] = True
  is_vowel['o'] = True
  is_vowel['O'] = True
  is_vowel['u'] = True
  is_vowel['U'] = True
  is_vowel['y'] = True
  is_vowel['Y'] = True
  newString = ''
  beforeVowel = ''
  i = 0
  no_vowels_yet = True
  while no_vowels_yet:
    if is_vowel.get(string[i], False):
      no_vowels_yet = False
    else:
      beforeVowel += string[i]
      i += 1
    
  for k in range(len(string)-i):
    newString += string[i+k]

  
  newString += beforeVowel
  newString += 'ay'
  return newString
