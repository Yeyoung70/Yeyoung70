# 리스트 자르기

def solution(n, slicer, num_list):
    answer = []
    if n == 1 :
        answer = num_list[0:slicer[1]+1]
    elif n == 2 :
        answer = num_list[slicer[0]:]
    elif n == 3 :
        answer = num_list[slicer[0]:slicer[1]+1]
    else :
        for i in num_list[slicer[0]:slicer[1]+1:slicer[2]] :
            answer.append(i)
    return answer

    
problems = [
    ({'n': 3, "slice": [1, 5, 2], "num_list": [1, 2, 3, 4, 5, 6, 7, 8, 9] }, [2, 3, 4, 5, 6]),
    ({'n': 4, "slice": [1, 5, 2], "num_list": [1, 2, 3, 4, 5, 6, 7, 8, 9] }, [2, 4, 6]),

]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')