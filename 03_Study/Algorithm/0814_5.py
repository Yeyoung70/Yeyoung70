# 1로 만들기

def solution(num_list):
    answer = 0

    for i in num_list:
        count = 0
        while i != 1:
            count += 1
            if i % 2 == 0:
                i = i / 2
            else:
                i = (i - 1) / 2
        answer += count 

    return answer

    
problems = [
    ({'num_list': [12, 4, 15, 1, 14]}, 11),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')