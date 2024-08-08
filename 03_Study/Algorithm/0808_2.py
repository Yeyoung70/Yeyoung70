# 배열 만들기 2

def solution(l, r):
    answer = []
    for num in range(l, r + 1):
        if not set(str(num)) - set(['0', '5']):
            answer.append(num)
            
    return answer if answer else [-1]


    
problems = [
    ({'l': 5, 'r': 555}, [5, 50, 55, 500, 505, 550, 555]),
    ({'l': 10, 'r': 20}, [-1]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')