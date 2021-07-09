from . airport_code import airport_code

def test_one_code():
    input = ['dfw']
    actual = airport_code(input)
    print(actual.hash_map_of_airport_codes)
    assert actual.hash_map_of_airport_codes['d'] == ['dfw']


    
def test_multiple_codes():
    input = ['atl', 'ats', 'atw', 'aty', 'aus']
    actual = airport_code(input)
    assert actual.hash_map_of_airport_codes['au'] == ['aus']
    assert 'atw' in actual.hash_map_of_airport_codes['at']    
