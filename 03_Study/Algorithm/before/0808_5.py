# 간단한 논리 연산

def solution(x1, x2, x3, x4):
    return (x1 or x2) and (x3 or x4)


    
problems = [
    ({'x1': False, 'x2': True, 'x3': True, 'x4': True}, True),
    ({'x1': True, 'x2': False, 'x3': False, 'x4': False}, False),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')