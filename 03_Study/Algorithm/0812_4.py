# 배열 조각하기

def solution(arr, query):
    for idx, query in enumerate(query):
        if idx % 2 == 1:
            arr = arr[query:]
        else:
            arr = arr[:query+1]

    return arr

    
problems = [
    ({'arr': [0, 1, 2, 3, 4, 5], "query": [4, 1, 2] }, [1, 2, 3]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')