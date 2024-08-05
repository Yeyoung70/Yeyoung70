# 크기가 작은 부분 문자열

def solution(a, d, included):
    answer = 0
    tmp = []
    
    for i in range(len(included)):
        tmp.append(a + (d * i))
        
    for idx, val in enumerate(included):
        if val:
            answer += tmp[idx]
    
    return answer


    
problems = [
    ({'a': 3, 'd': 4, 'included': ['true', 'false', 'false', 'true', 'true']}, 37),
    ({'a': 7, 'd': 1, 'included': ['false', 'false', 'false', 'true', 'false', 'false', 'false']}, 10),
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')