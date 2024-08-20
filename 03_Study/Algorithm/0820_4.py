# 문자열 바꿔서 찾기

def solution(myString, pat):
    result = myString.replace("A", "X").replace("B", "A").replace("X", "B")
    return int(pat in result)

    
problems = [
    ({'myString': "ABBAA", "pat": "AABB"}, 1),
    ({'myString': "ABAB", "pat": "ABAB"}, 0),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')