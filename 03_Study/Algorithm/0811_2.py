# 글자 지우기

def solution(my_string, indices):
    answer = ''
    for i in range(len(my_string)):
        if i not in indices:
            answer+=my_string[i]
            
    return answer

    
problems = [
    ({'my_string': "apporoograpemmemprs", "indices": [1, 16, 6, 15, 0, 10, 11, 3] }, "programmers"),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')