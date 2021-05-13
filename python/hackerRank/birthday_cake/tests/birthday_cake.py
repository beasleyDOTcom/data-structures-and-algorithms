# HEYYOOO
"""
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
Candles = [4,4,1,3]

The maximum height candles are 4 units high. There are 2 of them, so return 2.

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
Input Format

The first line contains a single integer,n , the size of candles.
The second line contains n space-separated integers , where each integer i describes the height of candle[I]. 

Algorithm:

look at each candle
if candle is equal to tallest numOfTallest += 1
else if candle is taller than tallest, numOfTallest = 1, tallest = candle





Candles = [4,4,1,3]
tallest = 4
0 1 2
numOfTallest == 2
candles = [1,4,5,6]
"""


def birthday_cake(numOfCandles, candles):
    if numOfCandles == 1:
        return 1
    tallest = candles[0]
    numOfTallest = 1

    for index in range(numOfCandles-1):
        candle = candles[index+1]
        if candle == tallest:
            numOfTallest += 1
        elif candle > tallest:
            numOfTallest = 1
            tallest = candle
    
    return numOfTallest