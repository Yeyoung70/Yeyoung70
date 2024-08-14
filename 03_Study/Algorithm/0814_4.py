# 조건에 맞게 수열 변환하기 2

def solution(arr):
    idx = 0 
    prev = arr

    while True:
        change = []
        for i in prev:
            if i >= 50 and i % 2 == 0: change.append(int(i / 2))
            elif i < 50 and i % 2 ==1: change.append(i * 2 + 1)
            else: change.append(i)
        
        same = all(a == b for a, b in zip(prev, change))
        if same:
            break
        idx += 1

        prev = change

    return idx

    
problems = [
    ({'arr': [1, 2, 3, 100, 99, 98]}, 5),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')