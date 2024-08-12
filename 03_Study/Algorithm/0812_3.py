# 왼쪽 오른쪽

def solution(str_list):
    for i in range(len(str_list)):
        if str_list[i] == "l":
            return str_list[:i]
        elif str_list[i] == "r":
            return str_list[i+1:]
    
    return []

    
problems = [
    ({'str_list': ["u", "u", "l", "r"] }, ["u", "u"]),
    ({'str_list': ["l"] }, 	[]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')