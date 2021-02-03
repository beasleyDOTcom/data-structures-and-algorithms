# whiteboard for isAlphanumeric
this function should receive a string as input and return a boolean indicating whether the string is alphanumeric

to be alphanumeric the string must:
- At least one character ("" is not valid)
- Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
- No whitespaces / underscore

## algorithm:
if string.length < 0 return false;
use regex.test() to determine if string has a single character that is not alphanumeric
