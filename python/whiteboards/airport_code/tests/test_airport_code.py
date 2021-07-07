from . airport_code import airport_code
def test_import_of_name():
    expected = 'True'
    actual = airport_code(True)
    assert actual == expected
    
