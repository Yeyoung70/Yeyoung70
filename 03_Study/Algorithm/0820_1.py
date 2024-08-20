# x 사이의 개수

def solution(myString):
    tmp = myString.split("x")
    return [len(i) for i in tmp]

    
problems = [
    ({'myString': "oxooxoxxox"}, [1, 2, 1, 0, 1, 0]),
    ({'myString': "xabcxdefxghi"}, [0, 3, 3, 3]),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')