# 크기가 작은 부분 문자열

def solution(t, p):
    answer = 0
    t_len, p_len = len(t), len(p)
    for i in range(t_len - p_len + 1):
        num = int(t[i:i+p_len])
        if num <= int(p) :
            answer += 1 

    return answer


    
problems = [
    ({'t': "3141892",'p': "271"}, 2),
    ({'t': "500220839878",'p': "7"}, 8),
    ({'t': "10203",'p': "15"}, 3),
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')