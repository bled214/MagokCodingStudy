"""
https://leetcode.com/problems/daily-temperatures/
"""
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:

        result = [0 for i in range(len(temperatures))]
        stk = []
        for i in range(len(temperatures)):
            if not stk:
                stk.append(i)
            else:
                if temperatures[stk[-1]] < temperatures[i]:
                    while stk and temperatures[stk[-1]] < temperatures[i]:
                        result[stk[-1]] = i - stk[-1]
                        stk.pop()
                    stk.append(i)
                else:
                    stk.append(i)

        return result
            





        
