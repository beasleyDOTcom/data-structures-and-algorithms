from . airport_code import airport_code

def test_one_code():
    input = ['dfw']
    actual = airport_code(input)
    print(actual.hash_map_of_airport_codes)
    assert actual.hash_map_of_airport_codes['d']['f']['w'] == 'dfw'


    
def test_multiple_codes():
    input = ['atl', 'ats', 'atw', 'aty']
    actual = airport_code(input)
    airports_list = actual.hash_map_of_airport_codes
    print(airports_list)
    print('this is actual: ', actual.hash_map_of_airport_codes)
    assert airports_list.includes('atw')
    
