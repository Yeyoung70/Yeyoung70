# 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

def solution(myString, pat):
    end = myString.rfind(pat)
    
    return myString[:end + len(pat)] 

    
problems = [
    ({'myString': "AbCdEFG", "pat": "dE"}, "AbCdE"),
    ({'myString': "AAAAaaaa", "pat": "a"}, "AAAAaaaa"),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')