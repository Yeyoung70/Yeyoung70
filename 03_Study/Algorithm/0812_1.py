# 배열 만들기 3

def solution(arr, intervals):
    a1, b1 = intervals[0]
    a2, b2 = intervals[1]
    
    return arr[a1:b1+1] + arr[a2:b2+1]

    
problems = [
    ({'arr': [1, 2, 3, 4, 5], "intervals": [[1, 3], [0, 4]]}, [2, 3, 4, 1, 2, 3, 4, 5]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')