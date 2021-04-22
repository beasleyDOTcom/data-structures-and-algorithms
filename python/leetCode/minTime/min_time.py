"""
You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order.

A query’s waiting time is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the durations of the first two queries.

Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you're given the queries of durations [1, 4, 5], then the total waiting time if the queries were executed in the order of [5, 1, 4] would be (0) + (5) + (5 + 1) = 11. The first query of duration 5 would be executed immediately, so its waiting time would be 0, the second query of duration 1 would have to wait 5 seconds (the duration of the first query) to be executed, and the last query would have to wait the duration of the first two queries before being executed.

Note: you’re allowed to mutate the input array.

Sample input
queries = [3, 2, 1, 2, 6]
1,2,2,3,6
        ^
0
1
3
5
8

1 
1 + 2 = 3
total @ [1] = 4
4 + 2 = 6
total @ [2] = 8
8 + 3 = 11
total @ [3] = 17



Sample output
17


"""


def minTime(arr):
  arr.sort()
  #sort arr so that the lowest value is first and the highest value is last 

  # make result arr[]
  # have two loops
  totalResult = 0
  for i in range(len(arr)):
    total= 0
    for k in range(i):
      # this inner loop is what sums each iteration
      total += arr[k]
    totalResult += total
    
  # have a for loop that just adds up everything in array
  return totalResult


print('return from minTime: ', minTime([3, 2, 1, 2, 6]))


  # def minimumWaitingTime(queries):
  #   queries.sort()
	
	# totalWaitingTime = 0
	# for idx, duration in enumerate(queries):
	# 	queriesLeft = len(queries) - (idx + 1)
	# 	totalWaitingTime += duration * queriesLeft
		
  #   return totalWaitingTime

"""
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
	
	let totalWaitingTime = 0;
  
	for (let idx= 0; idx < queries.length; idx++) {
		const duration = queries[idx];
		const queriesLeft = queries.length - (idx + 1);
		totalWaitingTime += duration * queriesLeft;
	}
  return totalWaitingTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
"""