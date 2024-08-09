# 같은 숫자는 싫어!

def solution(arr):
    answer = []
    for i in range(len(arr)):
        answer.append(arr[i])
        if [arr[i]] == arr[i +  1: i + 2]:
            answer.pop()
    return answer


    
problems = [
    ({'arr': [1,1,3,3,0,1,1]}, [1,3,0,1]),
    ({'arr': [4,4,4,3,3]}, [4,3]),
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')