# 3진법 뒤집기

def solution(n):
    answer = ''
    while n > 0:
        n, re = divmod(n, 3)
        answer += str(re)
    return int(answer, 3)


    
problems = [
    ({'n': 45}, 7),
    ({'n': 125}, 229),
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')