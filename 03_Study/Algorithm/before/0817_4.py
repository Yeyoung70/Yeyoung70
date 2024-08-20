# ad 제거하기

def solution(strArr):
    answer = []
    for str in strArr:
        if 'ad' not in str:
            answer.append(str)
        else:
            continue
        
    return answer

    
problems = [
    ({'strArr': ["and","notad","abcd"]}, ["and","abcd"]),
    ({'strArr': ["there","are","no","a","ds"]}, ["there","are","no","a","ds"]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')