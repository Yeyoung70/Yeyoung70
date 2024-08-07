# 수열과 구간 쿼리 3

def solution(arr, queries):
    for i in queries:
        arr[i[0]], arr[i[1]] = arr[i[1]], arr[i[0]]


    return arr


    
problems = [
    ({'arr': [0, 1, 2, 3, 4], 'queries': [[0, 3],[1, 2],[1, 4]]}, [3, 4, 1, 0, 2]),
]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')