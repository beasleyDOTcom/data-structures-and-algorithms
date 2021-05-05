def filter_list(l):
    i = 0
    while len(l) > i:
        if type(l[i]) == int:
            i += 1            
        else:
            l.pop(i)
    return l
assert filter_list([1,2,'a','b']) == [1,2]
assert filter_list([1,'a','b',0,15]) == [1,0,15]
assert filter_list([1,2,'aasf','1','123',123]) == [1,2,123]