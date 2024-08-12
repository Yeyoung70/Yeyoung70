# 2의 영역

def solution(arr):
    answer = []
    
    if 2 in arr:
        if arr.count(2) > 1:
            start = arr.index(2)
            end = len(arr) - arr[::-1].index(2)
            return arr[start:end]
        else:
            idx = arr.index(2)
            return [arr[idx]]
    else:
        return [-1]

    return answer

    
problems = [
    ({'arr': [1, 2, 1, 4, 5, 2, 9] }, [2, 1, 4, 5, 2]),
    ({'arr': [1, 2, 1] }, [2]),
    ({'arr': [1, 1, 1] }, [-1]),
    ({'arr': [1, 2, 1, 2, 1, 10, 2, 1] }, [2, 1, 2, 1, 10, 2]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')