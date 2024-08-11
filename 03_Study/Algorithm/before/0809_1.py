# 배열 만들기 5

def solution(intStrs, k, s, l):
    answer = []

    for i in intStrs:
        if int(i[s:s+l]) > k:
            answer.append(int(i[s:s+l]))

    return answer

    
problems = [
    ({'intStrs': ["0123456789","9876543210","9999999999999"], "k": 50000, "s": 5, "l": 5}, [56789, 99999]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')