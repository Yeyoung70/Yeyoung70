# 문자열이 몇 번 등장하는지 세기

def solution(myString, pat):
    start = 0
    cnt = 0

    while True:
        idx = myString.find(pat, start)
        if idx == -1:
            break
        cnt += 1
        start = idx + 1

    return cnt

    
problems = [
    ({'myString': "banana", "pat": "ana"}, 2),
    ({'myString': "aaaa", "pat": "aa"}, 3),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')