# python 비재귀 세그먼트 트리

```python
N = int(input())
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
```

## 설명
```
t = [0 for i in range(2*N)]
```
* 주어진 원소의 개수(N)일때,  2*N의 크기만큼 트리의 크기를 할당
* 2배만큼 할당받는 이유는 인덱스 N~(2N-1)까지는 입력으로 들어오는 숫자를 넣고, 인덱스 1~(N-1)까지는 트리의 노드로 구성되기 때문


