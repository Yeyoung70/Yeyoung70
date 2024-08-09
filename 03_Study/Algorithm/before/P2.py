# 자릿수 더하기
def recursive(n):
    if n == 0:
        return 0
    return n % 10 +recursive(n//10)

def solution(n):
    # answer = 0
    # # for s in str(n):
    # #   answer + int(s)
    # # 사칙연산
    # # 123 -> 12, 3
    # # 12 -> 1, 2
    # # 1 -> 0, 1

    # # while True:
    # #     몫 = n // 10
    # #     나머지 = n % 10 

    # #     answer += 나머지
    # #     n = 몫 
    # #     if 몫 == 0:
    # #         break 
    
    # while n != 0:
    #     answer += n % 10 
    #     n //= 10

    # return answer
    return recursive(n)

problems = [
    ({'n': 123}, 6),
    ({'n': 987}, 24)
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')
