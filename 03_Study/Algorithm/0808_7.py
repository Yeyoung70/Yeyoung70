# 9로 나눈 나머지

def solution(number):
    sum = 0
     
    for i in str(number):
        sum += int(i)
    
    answer = sum % 9

    return answer


    
problems = [
    ({'number': "123"}, 6),
    ({'number': "78720646226947352489"}, 2),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')