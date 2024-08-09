# 행렬의 덧셈

def solution(arr1, arr2):
    for i in range(len(arr1)):
        for j in range(len(arr1[0])):
            arr1[i][j] += arr2[i][j]
    return arr1


    
problems = [
    ({'arr1': [[1,2],[2,3]],'arr2': [[3,4], [5,6]]},[[4,6], [7,9]] ),
    ({'arr1': [[1],[2]],'arr2': [[3], [4]]},[[4], [6]] ),
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')