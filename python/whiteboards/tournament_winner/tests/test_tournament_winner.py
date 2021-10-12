from . tournament_winner import tournament_winner

def test_first_case():

    competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
    ]

    results = [0, 0, 1]
    actual = tournament_winner(competitions, results)
    expected = 'Python'
    assert actual == expected
    
def test_second_case():

    competitions = [
    ["HTML", "C#"],
    ]

    results = [0]
    actual = tournament_winner(competitions, results)
    expected = 'C#'
    assert actual == expected
    