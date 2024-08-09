def solution(n):
    answer = 0
    # n은 1이상, 50000000000 이하
    # 제곱근 찾기
    for x in range(1, n+1):
        if x * x == n:
            return (x+1) * (x+1)

    return -1


    
problems = [
    ({'n': 121}, 144),
    ({'n': 3}, -1),
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')