using System;
using System.Collections.Generic;

public class Program {
	public static bool IsValidSubsequence(List<int> array, List<int> sequence) {
		int count = 0;
		for(int i = 0; i < array.Count; i++)
		{
			if (count < sequence.Count && array[i] == sequence[count])
			{
				count += 1;
			}
		}
		return count == sequence.Count;
	}
}