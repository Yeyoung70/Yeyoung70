# 수 조작하기 2

def solution(numLog):
    answer = ''
    for i in range(1, len(numLog)):
        if numLog[i]-numLog[i-1] == 1:
            answer +='w'
        elif numLog[i]-numLog[i-1] == -1:
            answer +='s'
        elif numLog[i]-numLog[i-1] == 10:
            answer +='d'
        elif numLog[i]-numLog[i-1] == -10:
            answer +='a'
        else:
            continue

    return answer


    
problems = [
    ({'numLog': [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1],}, "wsdawsdassw"),
]

# 문제1 input, 문제1 output
for i, o in problems:
    print( '정답' if solution(**i) == o else '오답')