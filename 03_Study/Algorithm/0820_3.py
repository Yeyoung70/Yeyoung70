# 간단한 식 계산하기

def solution(binomial):
    answer = 0
    a, op, b = binomial.split(' ')
    if op == '+':
        answer = int(a) + int(b)
    elif op == '-':
        answer = int(a) - int(b)
    else:
        answer = int(a) * int(b)

    return answer

    
problems = [
    ({'binomial': "43 + 12"}, 55),
    ({'binomial': "0 - 7777"}, -7777),
    ({'binomial': "40000 * 40000"}, 1600000000),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')