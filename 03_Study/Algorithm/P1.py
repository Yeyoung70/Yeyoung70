def solution(s: str) -> bool :
    answer = True
    # 목표 : s에서 p와 y의 개수 세기
    # 문자열을 하나씩 확인하면서 p, P가 있는지 체크
    p_num = 0
    y_num = 0
    for c in s :
        if c == 'p' or c == 'P':
            p_num += 1
        if c == 'y' or c == 'Y':
            y_num += 1
    # p와 y의 개수가 같은지 비교
    if p_num == y_num:
        answer = True
    else:
        answer = False

    return answer

solution('aa')

problems = [
    ("pPoooyY",	True),
    ("Pyy", False)
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(i) == o else '오답')

# dictionary unpacking
# **dict
# k=v

# 입력 

# 출력


# def solution(s: str) -> bool :
#     # answer = 0 
#     # for c in s.lower() :
#         # if c == 'p':
#         #     answer += 1
#         # elif c == 'y':
#         #     answer -= 1
#         # answer += +1 if c == 'p' else -1 if c == 'y' else 0

#     return sum( [(+1 if c == 'p' else -1 if c == 'y' else 0) for c in s.lower()] ) == 0 