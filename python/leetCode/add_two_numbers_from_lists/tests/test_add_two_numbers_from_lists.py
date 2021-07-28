from . add_two_numbers_from_lists import add_two_numbers_from_lists
def test_import_of_name():
    expected = 'True'
    actual = add_two_numbers_from_lists(True)
    assert actual == expected
    
