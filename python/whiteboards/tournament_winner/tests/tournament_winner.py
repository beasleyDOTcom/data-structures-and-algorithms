
"""

There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points. 

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The copetitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.

It’s guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It’s also guaranteed that the tournament will always have at least two teams.

example input
  [ home , away ]
competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]

results = [0, 0, 1]

output
"Python"
// C# beats HTML, Python beats C#, and Python beats HTML.
// HTML - 0 pts
// C# - 3 pts
// Python - 6 pts

algorithm:
pay attention to who wins and track that in your hash table
  
then look through your hashtable and return the name of the team with the highest score

{
  'HTML': 6,
  'C#': 3
}
"""

def tournament_winner(competitions, results):
    # [ home , away ]
    hash_map_of_winners = {}

    for i in range(len(results)):
      if results[i] == 0: 
        index_of_winner = 1
      else:
        index_of_winner = 0
      winner = competitions[i][index_of_winner]
      if hash_map_of_winners.get(winner, False) != False:
        hash_map_of_winners[winner] += 3
      else:
        # this has not been instatiated
        hash_map_of_winners[winner] = 3

    list_of_keys = hash_map_of_winners.keys()

    winner = {
      'score': 0,
      'name': '',
    }

    for key in list_of_keys:
      if hash_map_of_winners[key] > winner['score']:
        winner['score'] = hash_map_of_winners[key]
        winner['name'] = key

    return winner['name']


