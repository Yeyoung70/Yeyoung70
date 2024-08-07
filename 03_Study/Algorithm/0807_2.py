# 수 조작하기 1

def solution(n, control):
    answer = n
    for i in control:
        if i == "w":
            answer += 1 
        elif i == "s":
            answer -= 1
        elif i == "d":
            answer += 10
        elif i == "a":
            answer -= 10

    return answer


    
problems = [
    ({'n': 0, 'control': "wsdawsdassw"}, -1),
]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')