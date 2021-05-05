from letter_combinations_of_phone_number import letterCombinations
import pytest

def test_letter_combinations():
    answer = letterCombinations('2')
    assert 'a' in answer
    