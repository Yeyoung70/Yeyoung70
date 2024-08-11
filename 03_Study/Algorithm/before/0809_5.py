# 세로 읽기

def solution(my_string, m, c):
    answer = ''
    temp_list = []
    for i in range(len(my_string)//m):
        temp_list.append(list(my_string[i*m:i*m+m]))
    
    for i in temp_list:
        answer += i[c-1]

    return answer

    
problems = [
    ({'my_string': "ihrhbakrfpndopljhygc", "m": 4, "c": 2}, "happy"),
    ({'my_string': "programmers", "m": 1, "c": 1}, "programmers"),
   ]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')