# 배열에서 문자열 대소문자 변환하기

def solution(strArr):
    answer = []

    for idx, val in enumerate(strArr):
        if idx % 2 == 0:
            answer.append(val.lower())
        else:
            answer.append(val.upper())
    
    return answer

    
problems = [
    ({'strArr': ["AAA","BBB","CCC","DDD"]}, ["aaa","BBB","ccc","DDD"]),
    ({'strArr': ["aBc","AbC"]}, ["abc","ABC"]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')