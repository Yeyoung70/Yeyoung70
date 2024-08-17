# 수열과 구간 쿼리 1

def solution(arr, queries):
    for i in queries:
        increse = [x + 1 for x in arr[i[0]:i[1]+1]]
        arr[i[0]:i[1]+1] = increse

    return arr

    
problems = [
    ({'arr': [0, 1, 2, 3, 4], "queries": [[0, 1],[1, 2],[2, 3]] }, [1, 3, 4, 4, 4]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')