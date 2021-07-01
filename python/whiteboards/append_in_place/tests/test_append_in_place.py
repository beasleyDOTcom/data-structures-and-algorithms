from . append_in_place import append_in_place


def test_happy_path():
    expected = [1,2,3,4]
    a = [1,2]
    b = [3,4]
    append_in_place(a, b)
    assert a == expected

def test_empty_arrays():
    expected = []
    a = []
    b = []
    append_in_place(a, b)
    assert a == expected

def test_front_heavy():
    expected = [1,2,3,4]
    a = [1,2,3,4]
    b = []
    append_in_place(a, b)
    assert a == expected

def test_back_heavy():
    expected = [1,2,3,4]
    a = []
    b = [1,2,3,4]
    append_in_place(a, b)
    assert a == expected