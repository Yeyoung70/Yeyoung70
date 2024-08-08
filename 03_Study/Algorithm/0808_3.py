# 콜라츠 수열 만들기

def solution(n):
    answer = [n]

    while n != 1:
        if n%2:
            n = 3 * n + 1
        else:
            n //= 2
        
        answer.append(n)


    return answer


    
problems = [
    ({'n': 10}, [10, 5, 16, 8, 4, 2, 1]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')