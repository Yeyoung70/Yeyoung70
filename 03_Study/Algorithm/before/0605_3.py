# 최대공약수와 최소공배수

def gcd(n, m):
    if n%m == 0:
        return m
    else:
        return gcd(m, n%m)

def solution(n, m):
    answer = [gcd(m, n), n*m // gcd(m, n)]    
    return answer


    
problems = [
    ({'n': 3,'m': 12}, [3,12]),
    ({'n': 2,'m': 5}, [1,10]),
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')