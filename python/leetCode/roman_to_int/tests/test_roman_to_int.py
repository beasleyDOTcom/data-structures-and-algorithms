from . roman_to_int import roman_to_int

def test_first_case():
    input = 'III'
    expected = 3
    actual = roman_to_int(input)
    assert actual == expected

def test_second_case():
    input = 'IV'
    expected = 4
    actual = roman_to_int(input)
    assert actual == expected

def test_thid_case():
    input = 'IX'
    expected = 9
    actual = roman_to_int(input)
    assert actual == expected 

def test_fourth_case():
    input = 'LVIII'
    expected = 58
    actual = roman_to_int(input)
    assert actual == expected 
