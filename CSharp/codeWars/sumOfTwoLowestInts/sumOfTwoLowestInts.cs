using System;

public static class Kata
{
	public static int sumTwoSmallestNumbers(int[] numbers)
	{
	    // define two variables, 1lowest 2lowest and initialize them with the first two values of numbers[]
        // then check against every other value in numbers[] assign the new lowest to the variable which holds the greatest difference
        int firstLowest = numbers[0];
        int secondLowest = numbers[1];
        
        for (int i = 2; i < numbers.Length; i++)
        {
            int current = numbers[i];
            if (current < firstLowest && current < secondLowest )
            {   
                if ( firstLowest < secondLowest )
                {
                    secondLowest = current;
                } 
                else if ( firstLowest == secondLowest )
                {
                    firstLowest = current;
                } 
                else 
                {
                    firstLowest = current;
                }
            }
            else if (current < firstLowest || current < secondLowest)
            {
                if ( firstLowest < secondLowest )
                {
                    secondLowest = current;
                }
                else 
                {
                    firstLowest = current;
                }
            }
        
        }
        return firstLowest + secondLowest;
    }
}