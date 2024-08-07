# 주사위 게임 2

import math

def solution(a, b, c):
    answer = 0

    if a == b  and b == c and a == c :
        answer = (a + b + c) * ((math.pow(a, 2)) + (math.pow(b, 2)) + (math.pow(c, 2))) * ((math.pow(a, 3)) + (math.pow(b, 3)) + (math.pow(c, 3)))
    elif a == b or b == c or a == c :
        answer = (a + b + c) * ((math.pow(a, 2)) + (math.pow(b, 2)) + (math.pow(c, 2)))
    else:
        answer = (a + b + c)

    return answer


    
problems = [
    ({'a': 2, 'b': 6, 'c': 1}, 9),
    ({'a': 5, 'b': 3, 'c': 3}, 473),
    ({'a': 4, 'b': 4, 'c': 4}, 110592),
]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')