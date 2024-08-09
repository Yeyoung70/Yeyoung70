# 배열 만들기 4

def solution(arr):
    stk = []
    idx = 0

    while idx < len(arr):
        if len(stk) == 0:
            stk.append(arr[idx])
            idx += 1
        elif len(stk) > 0 and stk[-1] < arr[idx]:
            stk.append(arr[idx])
            idx += 1
        elif len(stk) > 0 and stk[-1] >= arr[idx]:
            stk.pop()

    return stk


    
problems = [
    ({'arr': [1, 4, 2, 5, 3]}, [1, 2, 3]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')