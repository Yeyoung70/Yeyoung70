# 문자열 뒤집기

def solution(my_string, s, e):
    tmp = my_string[s:e+1][::-1]

    return my_string[:s] + tmp + my_string[e+1:]

    
problems = [
    ({'my_string': "Progra21Sremm3", "s": 6, "e": 12}, "ProgrammerS123"),
    ({'my_string': "Stanley1yelnatS", "s": 4, "e": 10}, "Stanley1yelnatS"),
   ]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')