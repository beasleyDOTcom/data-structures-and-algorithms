from . int_is_palindrome import int_is_palindrome
def test_first_case():
    num = 121
    expected = True
    actual = int_is_palindrome(num)
    assert actual == expected

def test_second_case():
    num = -121
    expected = False
    actual = int_is_palindrome(num)
    assert actual == expected

def test_third_case():
    num = 10
    expected = False
    actual = int_is_palindrome(num)
    assert actual == expected

def test_fourth_case():
    num = -101
    expected = False
    actual = int_is_palindrome(num)
    assert actual == expected

def test_third_case():
    num = 10101
    expected = True
    actual = int_is_palindrome(num)
    assert actual == expected

