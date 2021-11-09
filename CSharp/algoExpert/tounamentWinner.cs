using System.Collections.Generic;
using System;


public class Program {

	public string TournamentWinner(List<List<string> > competitions, List<int> results) {
		// one option is to make an object teamName : score then return the highest score
		IDictionary<string, int> winners = new Dictionary<string, int>();
		IDictionary<int, int> binarySwitch = new Dictionary <int, int>();
		binarySwitch.Add(0, 1);
		binarySwitch.Add(1, 0);
		
		string winner = "";
		int highScore = 0;
		for(int i = 0; i < results.Count; i++)
		{
			string currentWinner = competitions[i][binarySwitch[results[i]]];

			if(winners.TryGetValue(currentWinner, out int val))
			{
				winners[currentWinner] += 3;
			}
			else 
			{
				winners[currentWinner] = 3;
			}
			if (val + 3 > highScore)
				{
					winner = currentWinner;
					highScore += 3;
				}
		}
	
		return winner;
	}
}
