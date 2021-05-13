from . birthday_cake import birthday_cake

def test_birthday_cake():
    assert birthday_cake

def test_birthday_cake_with_one_candle():
    candles = [4,4,1,3]
    expected = 2
    actual = birthday_cake(4, candles)
    assert actual == expected

def test_birthday_cake_with_ascending_candles():
    candles = [1,4,5,6]
    expected = 1
    actual = birthday_cake(4, candles)
    assert actual == expected

