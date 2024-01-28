# python 비재귀 세그먼트 트리
'''python

N = 1e6
t = [0 for i in range(2*N)]

for i in range(N,2*N):
	t[i] = int(input().rstrip())

def init():
	for i in range(N-1,0,-1): t[i] = t[i<<1] + t[i<<1|1]

def update(p,val):
	p += N
	t[p] = val
	while p>1:
		t[p>>1] = t[p] + t[p^1]
		p>>=1

def query(l,r):
	l+=N
	r+=N
	res = 0
	while l<r:
		if l&1:
			res += t[l]
			l += 1
		if r&1:
			r -= 1
			res += t[r]
		l>>=1
		r>>=1

	return res
'''
