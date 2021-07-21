from . first_non_repeating_char import first_non_repeating_char

def test_one_char():
    expected = 0
    actual = first_non_repeating_char('a')
    assert actual == expected
    
def test_all_repeat():
    expected = -1
    actual = first_non_repeating_char('abcdefgabcdefg')
    assert actual == expected

def test_no_repeat():
    expected = 0
    actual = first_non_repeating_char('abcdefghijklmnopqrstuvwxyz')
    assert actual == expected

def test_little_of_both():
    expected = 4
    actual = first_non_repeating_char('abcdeabcdabcdabvdabcd')