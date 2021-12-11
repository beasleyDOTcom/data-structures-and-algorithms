using System;
using System.Collections.Generic;
using System.Collections;
public class Program {

	public int NonConstructibleChange(int[] coins) {

		if (coins.Length == 0 )
		{
			return 1;
		} 
		else if (coins.Length == 1)
		{
			if(coins[0] == 1)
			{
				return 2;
			}
			else
			{
				return 1;
			}
		}

		Array.Sort(coins);
		
		int changeTotal = 0;

		for(int i = 0; i < coins.Length; i++)
		{
			if (coins[i] > changeTotal +1 )
			{
				return changeTotal + 1;
			}
			else 
			{
				changeTotal += coins[i];
			}
		}

		return changeTotal + 1;
    }
}