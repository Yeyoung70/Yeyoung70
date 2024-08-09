# 수열과 구간 쿼리 2

def solution(arr, queries):
    answer = []

    for s, e, k in queries:
        li = []

        for i in range(s, e+1):
            if arr[i] > k:
                li.append(arr[i])
            
        if li:
            answer.append(min(li))
        else:
            answer.append(-1)

    return answer


    
problems = [
    ({'arr': [0, 1, 2, 4, 3], 'queries': [[0, 4, 2],[0, 3, 2],[0, 2, 2]]}, [3, 4, -1]),
]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')