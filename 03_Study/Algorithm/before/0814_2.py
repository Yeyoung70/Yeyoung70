# 할 일 목록

def solution(todo_list, finished):
    answer = dict(zip(todo_list, finished))

    return [key for key, val in answer.items() if val is False]

    
problems = [
    ({'todo_list': ["problemsolving", "practiceguitar", "swim", "studygraph"], "finished": [True, False, True, False] }, ["practiceguitar", "studygraph"]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')