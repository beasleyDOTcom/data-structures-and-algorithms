def angry_professor(k, a):
    
    studentsOnTime = 0

    for i in range(len(a)):
        if a[i] <= 0 :
            studentsOnTime += 1
        if studentsOnTime >= k:
            return 'YES'
    return 'NO'