from . most_common_word import most_common_word

def test_first_case():
    input = 'In a galaxy far far away'
    expected = 'far'
    actual = most_common_word(input)
    print(actual)
    assert actual == expected

def test_second_case():
    input = 'Taco cat ate a taco'
    expected = 'taco'
    actual = most_common_word(input)
    assert actual == expected

# the example from codefellows d34 says that the expected answer should be 'no' but I don't think that jives with their assertion that a bestWord can be updated and no one would have to iterate through all the words again.
def test_third_case():
    input = 'No. Try not. Do or do not. There is no try.'
    expected = 'do'
    actual = most_common_word(input)
    assert actual == expected

