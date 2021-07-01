from . append_in_place import append_in_place
def test_import_of_name():
    expected = 'True'
    actual = append_in_place(True)
    assert actual == expected
    
