#creating random array
random_array = []
(rand(5..10)).times { random_array.push(rand(1..100)) }
p random_array


def merge_sort(a)
  return a if a.length < 2
  b = merge_sort(a[0..((a.length / 2) - 1)])
  c = merge_sort(a[(a.length / 2)..(a.length)])
  d = []
  until b.empty? || c.empty?
    b.first <= c.first ? d << b.shift : d << c.shift
  end
  d + b + c

end

p merge_sort(random_array)
