# problem domain:
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

# algorithm:
check if number is outside of range -9 thru 9 (inclusive)
- if so, return number.
- else,
convert number to string
split string ('')
reverse number.
join('');

Check if number falls within the range of Math.pow(-2,31) and Math.pow(2, 31) - 1. 
- if so, return reversed number
- otherwise, return 0;

# testing

123 returns 321

-123 returns -321

Math.pow(-2, 31)-100 returns 0;
Math.pow(2, 31)+100 returns 0;