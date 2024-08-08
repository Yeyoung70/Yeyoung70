# 주사위 게임 3

def solution(a, b, c, d):
    answer = 0
    origin = [a, b, c, d]
    arr = list(set(origin))

    if len(arr) == 4:
        answer = min(arr)
    elif len(arr) == 3:
        p = max(origin, key=origin.count)
        tmp = [num for num in arr if num != p]
        answer = tmp[0] * tmp[1]
    elif len(arr) == 2:
        if max([origin.count(num) for num in arr]) > 2:
            p = max(origin, key=origin.count)
            q = min(origin, key=origin.count)
            answer = pow(((10 * p) + q), 2)
        else:
            answer = ((arr[0] + arr[1]) * abs(arr[0] - arr[1]))
    elif len(arr) == 1:
        answer = int(str(arr[0]) * 4)

    return answer


    
problems = [
    ({'a': 2, 'b': 2, 'c': 2, 'd': 2}, 2222),
    ({'a': 4, 'b': 1, 'c': 4, 'd': 4}, 1681),
    ({'a': 6, 'b': 3, 'c': 3, 'd': 6}, 27),
    ({'a': 2, 'b': 5, 'c': 2, 'd': 6}, 30),
    ({'a': 6, 'b': 4, 'c': 2, 'd': 5}, 2),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')