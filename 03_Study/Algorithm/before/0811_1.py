# 문자 개수 세기

def solution(my_string):
    answer = [0 for i in range(52)]
    for string in my_string:
        if string.isupper(): k =65
        else: k =71
        answer[ord(string)-k] += 1

    return answer

    
problems = [
    ({'my_string': "Programmers"}, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')