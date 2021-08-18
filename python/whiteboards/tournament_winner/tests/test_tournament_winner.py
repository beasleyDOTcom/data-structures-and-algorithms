from . tournament_winner import tournament_winner
def test_import_of_name():
    expected = 'True'
    actual = tournament_winner(True)
    assert actual == expected
    
