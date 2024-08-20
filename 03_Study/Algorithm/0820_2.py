# 문자열 잘라서 정렬하기

def solution(myString):
    answer = list(filter(None, myString.split("x")))
    return sorted(answer)

    
problems = [
    ({'myString': "axbxcxdx"}, ["a","b","c","d"]),
    ({'myString': "dxccxbbbxaaaa"}, ["aaaa","bbb","cc","d"]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')