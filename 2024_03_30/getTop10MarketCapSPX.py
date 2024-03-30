import pandas as pd
import yfinance as yf 
# https://github.com/ranaroussi/yfinance

# Read and print the stock tickers that make up S&P500
# 아래 위키피디아에서 s&p500 정보 가져오기
tickers = pd.read_html(
    'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')[0]
print(tickers.head())

# s&p500 symbol 정보만 가져와서 리스트화
print(tickers.Symbol.to_list())

ranking_tmp = []

for s in tickers.Symbol.to_list():
    # s 예시 AAPL => 애플 주식 심볼
    result = yf.Ticker(s)
    if 'marketCap' not in result.info:
        # BRK.B, BF.B
        # 위 두개만 정보를 가져오지 못함
        continue
    # marketcap 이 시가총액
    ranking_tmp.append((s, result.info['marketCap']))

# => 여기까지 한번 가져올 때마다 시간이 너무 많이 걸림
# 한번 가져오면 csv 파일로 저장해야

# 판다스 데이터프레임 자체 정렬은 없는가?
ranking_tmp.sort(key=lambda x: x[1], reverse=True)

# s&p500 시총 상위 10개 출력
for i in range(10):
    print(ranking_tmp[i])
    
# 출력 
# ('MSFT', 3126134571008)
# ('AAPL', 2647976837120)
# ('NVDA', 2258900090880)
# ('GOOG', 1885998940160)
# ('GOOGL', 1882413989888)
# ('AMZN', 1873679220736)
# ('META', 1237942534144)
# ('LLY', 739657973760)
# ('AVGO', 614222856192)
# ('JPM', 576938115072)
