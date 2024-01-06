def solution(info, edges):
    dic={i:[] for i in range(17)}
    #[부모 노드 번호, 자식 노드 번호]
    for a,b in edges:
        dic[a].append(b)
    #(여유 수, 전체 양의 수, 방문 가능수(2진법))
    #제일처음엔 (1,1,2**n+2**m) 같은 식.
    '''체크는
    for i in range(17):
    v & 2<<i and 여유 양이 양수라면
    '''
    startv=1 #현재 조합의 누적노드
    maxsheep=1
    visited=[0]*(2**17)
    que=[(1,1,startv)] 
    visited[startv]=1
    while que:
        nq=[]
        for RS,MS,NP in que:#rest sheep, max sheep, next position
            maxsheep=max(maxsheep,MS)
            for i in range(17):
                if not NP&(1<<i): #현재 리프노드가 아닌 경우
                    continue
                for j in dic[i]:
                    if NP&(1<<j):#다음 방문노드인데 겹쳤잖아
                        continue
                    NNP=NP+(1<<j)#해당리프노드를 빼고 다음 노드
                    if visited[NNP]==1:
                        continue
                    if info[j]==0:
                        nq.append((RS+1,MS+1,NNP))
                        visited[NNP]=1
                    elif info[j]==1 and RS>1:
                        nq.append((RS-1,MS,NNP))
                        visited[NNP]=1
                        
        que=nq
    answer = maxsheep
    return answer
