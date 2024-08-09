# 크기가 작은 부분 문자열

def solution(a, d, included):
    answer = 0
    tmp = []
    
    for i in range(len(included)):
        tmp.append(a + (d * i))
        
    for idx, val in enumerate(included):
        if val == 'true':
            answer += tmp[idx]
    
    return answer

problems = [
    ({'a': 3, 'd': 4, 'included': [True, False, False, True, True]}, 37),
    ({'a': 7, 'd': 1, 'included': [False, False, False, True, False, False, False]}, 10),
]

# 문제1 input, 문제1 output
for i, o in problems:
    print('정답' if solution(**i) == o else '오답')