# 홀수 vs 짝수

def solution(num_list):
    odd = sum([num_list[i] for i in range(0, len(num_list), 2)])
    even = sum([num_list[i] for i in range(1, len(num_list), 2)])
    
    return odd if odd > even else even

    
problems = [
    ({'num_list': [4, 2, 6, 1, 7, 6] }, 17),
    ({'num_list': [-1, 2, 5, 6, 3] }, 8),
]

# 문제1 input, 문제1 output
for i, o in problems:
        print( '정답' if solution(**i) == o else '오답')