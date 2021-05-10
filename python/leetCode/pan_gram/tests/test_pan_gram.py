from . pan_gram import pan_gram, another

def test_proof_of_life():
    assert pan_gram

def test_pan_gram_with_all_letters():
    expected = True
    sentence = "thequickbrownfoxjumpsoverthelazydog"
    actual = pan_gram(sentence)
    assert actual == expected

def test_pan_gram_with_not_all_letters():
    expected = False
    sentence = 'yo mama'
    actual = pan_gram(sentence)
    assert actual == expected


def test_pan_gram_with_all_letters_a():
    expected = True
    sentence = "thequickbrownfoxjumpsoverthelazydog"
    actual = another(sentence)
    assert actual == expected

def test_pan_gram_with_not_all_letters_b():
    expected = False
    sentence = 'yo mama'
    actual = another(sentence)
    assert actual == expected