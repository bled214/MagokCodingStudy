import sys
input = sys.stdin.readline

'''
모든 변환은
I, L, LL, LLL
H, HL, HLL, HLLL로 나타난다.
R = LLL
V = HLL
LH = HLLL이 된다.
** 오른쪽표현을 우선으로 처리한다.**
'''

N = int(input())
R = [input().strip() for _ in range(N)]

def I(r,c):
    return R[r][c]

def L(r,c):
    cent = (N-1)/2
    r -= cent
    c -= cent
    r,c = c, -r
    r += cent
    c += cent
    return R[int(r)][int(c)]


def LL(r,c):
    cent = (N-1)/2
    r -= cent
    c -= cent
    r,c = -r, -c
    r += cent
    c += cent
    return R[int(r)][int(c)]

def LLL(r,c):
    cent = (N-1)/2
    r -= cent
    c -= cent
    r,c = -c, r
    r += cent
    c += cent
    return R[int(r)][int(c)]

def H(r,c):
    return R[r][N-1-c]

def LH(r,c):
    cent = (N-1)/2
    r -= cent
    c -= cent
    r,c = c, -r
    r += cent
    c += cent
    return R[N-1-int(r)][int(c)]    
    
def LLH(r,c):
    cent = (N-1)/2
    r -= cent
    c -= cent
    r,c = -r, -c
    r += cent
    c += cent
    return R[int(r)][N-1-int(c)]

def LLLH(r,c):
    cent = (N-1)/2
    r -= cent
    c -= cent
    r,c = -c, r
    r += cent
    c += cent
    return R[N-1-int(r)][int(c)]
fdic = [ [I,L,LL,LLL],[H,LH,LLH,LLLH]]
dic = {"R": (0,3), "L": (0,1), "H": (1,0), "V": (1,2)}
M = int(input())
MM = 1<<((M-1).bit_length())
seg = [(0,0)]*MM+list(map(lambda x: dic[x], input().strip()))+[(0,0)]*(MM-M)
lazy = [0]*2*MM
sons = [0]*MM+[1]*M+[0]*(MM-M) # 값 update에서 필요
# (a,b)는 b번 L하고, a번 H했다는 뜻
# (a,b) * (c,d) = b번 L하고 a번 H하고 d번 L하고 c번 H했다는 뜻
# -> ((a+c)%2, (b-d)%4)
def merge(a,b,c,d):
    return ( (a+c)%2, (b+(-1)**a*d)%4)

for i in range(MM-1,0,-1):
    a,b = seg[i*2]
    c,d = seg[i*2+1]
    seg[i] = merge(a,b,c,d)
    sons[i] = sons[2*i]+ sons[2*i+1]


for i in range(int(input())):
    a, *b = input().split()
    if a== '1':
        r,c = map(int,b)
        r-=1
        c-=1
        fr,fc = seg[1]
        f = fdic[fr][fc]
        print(f(r,c))
    else:
        s,e,C = b
        s = MM+int(s)-1
        e = MM+int(e)
        C = dic[C]
        while s<e:
            if s%2:
                
                #레이지 전파
                stk = [s//2]
                while stk[-1]:
                    stk.append(stk[-1]//2)
                while stk:
                    cur = stk.pop()
                    cur_lazy = lazy[cur]
                    if not cur_lazy:continue
                    lazy[cur*2] = cur_lazy
                    lazy[cur*2+1] = cur_lazy
                    
                    command = (0,0)
                    for cnt in range(sons[cur*2]%4):
                        command = merge(*command,*cur_lazy)
                    seg[cur*2] = command
                    
                    command = (0,0)
                    for cnt in range(sons[cur*2+1]%4):
                        command = merge(*command,*cur_lazy)
                    seg[cur*2+1] = command
                    
                    lazy[cur] = 0

                    
                #본인 재계산
                lazy[s] = C
                command = (0,0)
                for cnt in range(sons[s]%4):
                    command = merge(*command,*C)
                seg[s] = command
                #부모 재계산
                i = s//2
                while i:
                    a,b = seg[i*2]
                    c,d = seg[i*2+1]
                    seg[i] = merge(a,b,c,d)
                    i//=2
                s += 1
            s//=2

            if e%2:
                e -= 1
                
                
                #레이지 전파
                stk = [e//2]
                while stk[-1]:
                    stk.append(stk[-1]//2)
                while stk:
                    cur = stk.pop()
                    cur_lazy = lazy[cur]
                    if not cur_lazy:continue
                    lazy[cur*2] = cur_lazy
                    lazy[cur*2+1] = cur_lazy
                    command = (0,0)
                    for cnt in range(sons[cur*2]%4):
                        command = merge(*command,*cur_lazy)
                    seg[cur*2] = command
                    
                    command = (0,0)
                    for cnt in range(sons[cur*2+1]%4):
                        command = merge(*command,*cur_lazy)
                    seg[cur*2+1] = command
                    lazy[cur] = 0
                #본인 재계산
                lazy[e] = C
                command = (0,0)
                for cnt in range(sons[e]%4):
                    command = merge(*command,*C)
                seg[e] = command
                #부모 재계산
                i = e//2
                while i:
                    a,b = seg[i*2]
                    c,d = seg[i*2+1]
                    seg[i] = merge(a,b,c,d)
                    i//=2
            e//=2
