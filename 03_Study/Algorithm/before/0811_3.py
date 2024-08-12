# 가까운 1찾기

def solution(arr, idx):
    answer = 0
    new_arr = arr[idx:]
    if new_arr.count(1) !=0:
        answer = new_arr.index(1)+idx
    else:
        answer = -1

    return answer

    
problems = [
    ({'arr': [0, 0, 0, 1], "idx": 1 }, 3),
    ({'arr': [1, 0, 0, 1, 0, 0], "idx": 4 }, -1),
    ({'arr': [1, 1, 1, 1, 0], "idx": 3 }, 3),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')