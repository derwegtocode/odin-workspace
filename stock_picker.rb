#assigning random values to 30 days 
stocks = []
30.times { stocks.push(rand(1..100)) }
p stocks

#choosing the best profit from best buy and consequent best sell
def stock_picker(stocks)
  buy_price = 0
  sell_price = 0
  profit = 0
  stocks.each do |buy|
    stocks[(stocks.index(buy) + 1)..-1].each do |sell|
      if (sell - buy) > profit
        profit = sell - buy
        buy_price = buy
        sell_price = sell
      end
    end
  end
  best_days = [stocks.index(buy_price), stocks.index(sell_price)]

  p "#{best_days} for profit of $#{sell_price} - $#{buy_price} = $#{sell_price - buy_price}"
 
end

stock_picker(stocks)