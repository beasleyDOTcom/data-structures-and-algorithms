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

def has_won(answers_list, player_choice, player, where_to_look):
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
