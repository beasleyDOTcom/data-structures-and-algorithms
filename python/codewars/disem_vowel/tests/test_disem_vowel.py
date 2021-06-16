from . disem_vowel import disem_vowel

def test_import_of_name():
    expected = 'True'
    actual = disem_vowel(True)
    assert actual == expected

def test_string_with_no_vowels():
    input = 'rstlknwyvm'
    expected = input
    actual = disem_vowel(input)
    assert actual == expected

def test_string_with_vowels():
    input = "hello! what's going on here?"
    actual = disem_vowel(input)
    expected = "hll! wht's gng n hr?"
    assert actual == expected


    
