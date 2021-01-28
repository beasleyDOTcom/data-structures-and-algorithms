# Challenge: Multi Bracket Validation
## basic overview:
In this challenge we are evaluating a string and returning whether or not the brackets are balanced or not. By balanced 


## Feature Tasks

Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}
Example
Input	Output
{}	TRUE
{}(){}	TRUE
()[[Extra Characters]]	TRUE
(){}[[]]	TRUE
{}{Code}[Fellows](())	TRUE
[({}]	FALSE
(](	FALSE
{(})	FALSE
Consider these small examples and why they fail.

Input	Output	Why
{	FALSE	error unmatched opening { remaining.
)	FALSE	error closing ) arrived without corresponding opening.
[}	FALSE	error closing }. Doesn’t match opening (.

# plan
When we planned out our solution and developed our whiteboard we didn't realize the implications of the last input output. 
So I tried doing it a different way, but I got kind of lost in the weeds and couldn't find my way out.


I wonder if regex is the way to go for this
while regex.test() is truthy, string.replace(regex)
if string.length === 0 return true else return false;

# Hindsight
This is a pretty long regex that is hard to look at so I'm going to break it down: const regex = /\{[\w!@#$%^&*:";'<>,.?\/-_=+|\~]*\}|\[[\w!@#$%^&*:";'<>,.?\/-_=+|\~]*\]|\([\w!@#$%^&*:";'<>,.?\/-_=+|\~]*\)/;

there are three groups of regex expressions seperated by or '|' operands. 
each one has a right facing bracket, a bunch of allowable (everything but brackets) characters and then a left facing bracket. 
{d9**^%%} for example, would be captured and then replaced.  