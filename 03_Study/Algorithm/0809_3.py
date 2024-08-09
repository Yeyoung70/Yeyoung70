# 접미사 배열

def solution(my_string):
    answer = []

    for i in range(len(my_string)):
        answer.append(my_string[i:])
    
    answer.sort()
    return answer

    
problems = [
    ({'my_string': "banana"}, ["a", "ana", "anana", "banana", "na", "nana"]),
    ({'my_string': "programmers"}, ["ammers", "ers", "grammers", "mers", "mmers", "ogrammers", "programmers", "rammers", "rogrammers", "rs", "s"]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')