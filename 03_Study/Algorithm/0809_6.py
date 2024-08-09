# qr code

def solution(q, r, code):
    answer = ''

    for idx, val in enumerate(code):
        if idx % q ==r:
            answer += val

    return answer

    
problems = [
    ({'q': 3, "r": 1, "code": "qjnwezgrpirldywt"}, "jerry"),
    ({'q': 1, "r": 0, "code": "programmers"}, "programmers"),
   ]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')