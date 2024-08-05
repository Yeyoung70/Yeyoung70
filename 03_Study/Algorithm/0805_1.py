# 크기가 작은 부분 문자열

def solution(code):
    answer = ''
    mode = False

    for idx in range(len(code)) :
        if mode == 0 :
            if code[idx] == "1" :
                mode = not mode
            else :
                if idx % 2 == 0 :
                    answer += code[idx]

        else : 
            if code[idx] == "1" :
                mode = not mode
            else :
                if idx % 2 == 1 :
                    answer += code[idx]
    if not answer :
        return "EMPTY"          

    return answer


    
problems = [
    ({'code': "abc1abc1abc"}, "acbac"),
    ]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')