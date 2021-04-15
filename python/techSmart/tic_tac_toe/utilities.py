import random



def print_board(board_list): 
  print('''
   {} | {} | {}
  -----------
   {} | {} | {}
  -----------
   {} | {} | {}
   '''.format(*board_list))

def print_positions():
  print_board(range(1, 10))

def change_player(player):
  if player == 'X':
    player = 'O'
  else:
    player = 'X'
  return player

def has_won(answers_list, player, where_to_look):
  for line in where_to_look:
    has_all_three = True;
    for mark in line:
      if answers_list[mark] != player:
        has_all_three = False
    if has_all_three:
      return True
  return False

def is_valid_move(player_choice, answers_list):
  if player_choice % 1 != 0:
    return False
  elif player_choice < 0 or player_choice > 8:
    return False
  elif answers_list[int(player_choice)] != ' ':
    return False
  else:
    return True
      

def declare_winner(player):
  return print('Congratulations player ' + player + ', You\'ve Won!')

def xoxo():
  randInt = random.randint(0,1)
  if randInt == 1:
    xo = ['X', 'O']
  else:
    xo = ['O', 'X']

  return xo
def return_zero_or_one():
  return random.randint(0,1)
def computer_turn(answers_list, computer):
  # if the middle hasn't been taken yet, go there
  if answers_list[4] == ' ':
     answers_list[4] = computer
     return '4'
  # now, see if opponent (player) is one move away from winning
  i = 0
  for position in answers_list:
    if position == ' ':
      answers_list[i] = computer  
      return str(i)
    elif answers_list[len(answers_list) - 1] == ' ':
      answers_list[len(answers_list) -1] = computer  
      return str(len(answers_list)-1)    
    else:
      i += 1

def player_turn(answers_list, player):
  player_choice = float(input('Player ' + player + ', please enter number where you would like to place your mark: ' )) - 1
  if is_valid_move(player_choice, answers_list):
    player_choice = int(player_choice)
    answers_list[player_choice] = player
    player_choice = str(player_choice)
    print_board(answers_list)
    return player_choice
      
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
    return player_turn(answers_list, player)
