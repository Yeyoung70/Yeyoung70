def solution(n):
    answer = 0
    count = [0]*10
    while n:
        count[n%10] += 1
        n //= 10
    # [0, 2, 1, 1, 0, 0, 0, 1, 1, 0]
    현재자릿수 = 1
    # 반복문
    for i, c in enumerate(count):
        for _ in range(c):
            answer += i * 현재자릿수 
            현재자릿수 *= 10
    return answer


problems = [
    ({'n': 118372}, 873211)
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')