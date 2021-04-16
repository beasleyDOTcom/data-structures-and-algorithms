import utilities

board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

dict_hash = {}
dict_hash['0'] = [[0,1,2],[0,4,8], [0,3,6]]
dict_hash['1'] = [[0,1,2], [1,4,7]]
dict_hash['2'] = [[0,1,2], [2,5,8], [2,4,5]]
dict_hash['3'] = [[0,3,6], [3,4,5]]
dict_hash['4'] = [[1,4,7], [3,4,5], [6,4,2], [0,4,8]]
dict_hash['5'] = [[2,5,8], [3,4,5]]
dict_hash['6'] = [[0,3,6], [6,4,2], [6,7,8]]
dict_hash['7'] = [[6,7,8], [1,4,7]]
dict_hash['8'] = [[6,7,8], [0,4,8], [2,5,8]]

# Requirements to complete:
#
#  * Every turn, display a grid in the console containing 
#    either X, O, or a space (" ") in each of the 8 spots. 
#
#  * In the console, the current player (X or O) enters a 
#    number 0 - 9 in order to designate where they would like 
#    to place their move
# 
#  * When a match is made (3 in a row, 3 in a column, or 3 diagonally)
#    the program ends and declares a winner.
#
#  * If the board is full and there is no winner, the program 
#    declares a tie.
answers_list = [' ',' ',' ',' ',' ',' ',' ',' ',' ']

utilities.print_board(answers_list)

def one_player():
  xoxo = utilities.xoxo()
  player = xoxo[0]
  computer = xoxo[1]
  total_number_of_moves = 1
  print("The grid is numbered as seen below.")
  utilities.print_positions()

  # decide who goes first and setup last_player
  if utilities.return_zero_or_one():
    print('The computer has been randomly been selected to go first.')
    print('No Really! It was totally randome! I had nothing to do with it?...')
    utilities.computer_turn(answers_list, computer)
    last_player = 'computer'
    utilities.print_board(answers_list)
    print("On your turn, enter the number of an open spot to place your mark. The first player to get three marks in a row is the winner!")

  else:
    print('You have been randomly selected to go first')
    print("Enter the number of an open spot to place your mark. The first player to get three marks in a row is the winner!")

    utilities.player_turn(answers_list, player)
    last_player = 'player'

  # get the ball rolling
  while total_number_of_moves < 9:
    if last_player == 'player':
      computer_choice = utilities.computer_turn(answers_list, computer)
      last_player = 'computer'
      total_number_of_moves += 1
      utilities.print_board(answers_list)
      if utilities.has_won(answers_list, computer, dict_hash[computer_choice]):
        return print('Oh, too bad! The computer has won! Please try again!')
    else:
      player_choice = utilities.player_turn(answers_list, player)
      last_player = 'player'
      total_number_of_moves += 1
      if utilities.has_won(answers_list, player, dict_hash[player_choice]):
        return utilities.declare_winner(player)
  print("Good match! It's a tie!")
        



def two_player():
  xoxo = utilities.xoxo()
  print("The grid is numbered as seen below.")
  utilities.print_positions()
  print('Player ' + xoxo[0] +' will go first, followed by Player ' + xoxo[1] + '.')

  print("On your turn, enter the number of an open spot to place your mark. The first player to get three marks in a row is the winner!")

  player = xoxo[0]
  total_number_of_moves = 0

  while total_number_of_moves < 9:
    player_choice = float(input('Player ' + player + ', please enter number where you would like to place your mark: ' )) - 1
    
    if utilities.is_valid_move(player_choice, answers_list):
      total_number_of_moves += 1
      player_choice = int(player_choice)
      answers_list[player_choice] = player
      player_choice = str(player_choice)

      if utilities.has_won(answers_list, player, dict_hash[player_choice]):
        utilities.print_board(answers_list)
        return utilities.declare_winner(player)
        
      else:
        player = utilities.change_player(player)
        utilities.print_board(answers_list)

    else:
      if player_choice < 0 or player_choice > 8:
        print('Oops, that didn\'t work!, entries must be 1-9')
      elif player_choice % 1 != 0:
        print('Oops, this game does not accept numbers with decimal e.g. 1.1 or 2.3')
        print('Please enter a whole number 1-9')
      elif answers_list[int(player_choice)] == player:
        print('Oops, You\'ve already played there! Please enter a number 1-9 that has not been played yet')
      else:
        print('Oops, your opponent has already placed their mark in that location! Please enter a number 1-9 that hasn\'t been played yet.')

  print('It\'s a tie!!!')
print("Welcome to Tic Tac Toe!")
oneOrTwo = input('If you would like to play versus the computer enter "1", if would like to play the 2player version with someone else, enter "2"')

if oneOrTwo == '1':
  one_player()
elif oneOrTwo == '2':
  two_player()
# perhaps has_won(player_choice) can reduce the seach area by taking in the players choice and using that to see if that last choice has made the player the winner

# mayber has_won has a dictionary for each place that knows where to find a win for each number

"""
initial takeaways:

I feel like the hardest part of fulfilling this prompt is determining an efficient way to detect a "win".
I couldn't really come up with anything clever so I followed the red, green, refactor rule by first getting a solution before I worry about improving that solution

Given enough time, I would figure out a way to differentiate the regular prompts vs. "errors" 

5 days later...

Took a few hours after making the learning assessment to work on getting the one player working. It took more work than I thought to reengineer the way this worked but I'm happy with the result.

If I had more time now.. I would make an offensive mode and a defensive mode to coincide with whether the computer got the first turn or not. 
"""