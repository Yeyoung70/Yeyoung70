# 부분 문자열 이어 붙여 문자열 만들기

def solution(my_strings, parts):
    answer = ''

    for idx, val in enumerate(parts):
        answer += my_strings[idx][val[0]:val[1]+1]

    return answer

    
problems = [
    ({'my_strings': ["progressive", "hamburger", "hammer", "ahocorasick"], "parts": [[0, 4], [1, 2], [3, 5], [7, 7]]}, "programmers"),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')