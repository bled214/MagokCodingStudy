"""
잃어버린 괄호
https://www.acmicpc.net/problem/1541
"""

import sys
input = sys.stdin.readline

math_str = input().rstrip()


tmp_list = math_str.split('-')
# print(tmp_list)

tmp_list2 = []

for t in tmp_list:
    t_list = t.split('+')
    t_list = list(map(int, t_list))
    s = 0
    for i in t_list:
        s += i
    tmp_list2.append(s)

final_s = tmp_list2[0]

for i in range(1, len(tmp_list2)):
    final_s -= tmp_list2[i]

print(final_s)
