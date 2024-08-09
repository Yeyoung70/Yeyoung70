# 수열과 구간 쿼리 4

def solution(arr, queries):
    for s, e, k in queries:
        for i in range(s, e+1):
            if i % k == 0:
                arr[i] += 1

    return arr


    
problems = [
    ({'arr': [0, 1, 2, 4, 3], 'queries': [[0, 4, 1],[0, 3, 2],[0, 3, 3]]}, [3, 2, 4, 6, 4]),
]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')