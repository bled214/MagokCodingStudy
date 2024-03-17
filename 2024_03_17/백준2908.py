a = input()
tmp_list = a.split()
# tmp_list = ['734', '893']
# 734 893 []
# split() 함수 -> 띄어쓰기 기준으로 나눔(아무것도 파라미터값이 없을)
# split('4') '73' ' 893'


number1 = tmp_list[0]#734
number2 = tmp_list[1]#893

# 문자열 뒤집기 - 슬라이싱 방법
number1 = number1[::-1]
number2 = number2[::-1]

# 문자열 => 정수로 변경
number1 = int(number1)
number2 = int(number2)

if number1 > number2:
	result = number1
else:
	result = number2
print(result)
	
