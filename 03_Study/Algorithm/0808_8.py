# 문자열 여러 번 뒤집기

def solution(my_string, queries):
    for start, end in queries:
        my_string = my_string[:start] + my_string[start:end+1][::-1] + my_string[end+1:]

    return my_string

    
problems = [
    ({'my_string': "rermgorpsam", "queries": [[2, 3], [0, 7], [5, 9], [6, 10]]}, "programmers"),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')