using System;
using System.Collections;

public class Program {

	public int[] SortedSquaredArray(int[] array) {
		// Write your code here.
		int[] result = new int[array.Length];
		for(int i = 0; i < array.Length; i++)
		{
			result[i] = Convert.ToInt32(Math.Pow((double)array[i], (double)2));
			Console.WriteLine((int)Math.Pow((double)array[i], (double)2));
		};
		if (result.Length > 1 )
		{
			Array.Sort(result);
		}
		return result;
	}
}