using System;

public class Kata
{
  public static int SquareDigits(int n)
  {
    public static List<int> arr = new List<int> ();
    public static List<int> number = new List<int> (n);
    public static List<string> result = new List<string> ();
    
    // 1234, 123, 12, 1
    while((number[number.Count -1] / 10) >= 1)// falsy means there is a single digit left
      {
      // add the last digit of n to arr
        arr.Add(number[number.Count -1] % 10);
      //add n sans last digit to number list
        number.Add(Math.Floor(number[number.Count-1] / 10));
      }
    arr.Add(number[number.Count -1]);
    // 4, 3, 2, 1
    foreach(int num in arr)
      {
        result.Add((num * num).ToString());
      }
    
    string str = arr[arr.Count -1];
    for(int i = arr.Count-2; i > 0; i--)
      {
            Console.WriteLine(str + arr[i]);
            str = str + arr[i];
      }
    return str;
  }
}