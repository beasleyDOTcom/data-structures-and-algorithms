from . most_common_word import most_common_word
def test_import_of_name():
    expected = 'True'
    actual = most_common_word(True)
    assert actual == expected
def test_first_case():
    input = 'In a galaxy far far away'
    expected = 'far'
    actual = most_common_word(input)
    assert actual == expected

def test_second_case():
    input = 'Taco cat ate a taco'
    expected = 'taco'
    actual = most_common_word(input)
    assert actual == expected

def test_third_case():
    input = 'No. Try not. Do or do not. There is no try.'
    expected = 'no'
    actual = most_common_word(input)
    assert actual == expected

