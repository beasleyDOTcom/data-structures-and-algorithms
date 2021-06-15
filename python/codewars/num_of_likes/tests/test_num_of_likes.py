from . num_of_likes import num_of_likes

    
def test_empty():
    expected = 'no one likes this'
    actual = num_of_likes([])
    assert actual == expected

def test_one():
    expected = 'john likes this'
    actual = num_of_likes(['john'])
    assert actual == expected

def test_two():
    expected = 'Peter and Paul like this'
    actual = num_of_likes(['Peter', 'Paul'])
    assert actual == expected

def test_three():
    expected = 'Matthew, Mark and Luke like this'
    actual = num_of_likes(['Matthew', 'Mark', 'Luke'])
    assert actual == expected

def test_four():
    expected = 'Megan, Beasley and 2 others like this'
    actual = num_of_likes(['Megan', 'Beasley', 'Lauren', 'Cullen'])
    assert actual == expected

def test_wine_tour():
    input = ['Olivia', 'Megan', 'Lauren', 'Cullen', 'Collin', 'Allie']
    expected = 'Olivia, Megan and 4 others like this'
    actual = num_of_likes(input)
    assert actual == expected