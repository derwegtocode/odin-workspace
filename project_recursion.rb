#Using iteration, write a method 
#fibs which takes a number and 
#returns an array containing that 
#many numbers from the fibonacci sequence. 
#Using an example input of 8, 
#this method should return the array 
#[0, 1, 1, 2, 3, 5, 8, 13].

def fibs(n)
  fibs_array = []
  i = 0
  until i == n
    if i == 0 || i == 1
      fibs_array.push(i)
    else
      fibs_array.push(fibs_array[i - 1].to_i + fibs_array[i - 2].to_i)
    end
    i += 1
  end
  p fibs_array
end


#Now write another method 
#fibs_rec which solves the same problem recursively. 
#This can be done in just 3 lines 
#(or 1 if you’re crazy, but don’t consider 
#either of these lengths a requirement… just get it done).

def fibs_rec(n, fibs_array = [0, 1])
  return fibs_array.slice(0, fibs_array.length - 1) if n < 2
  fibs_array << (fibs_array[-1] + fibs_array[-2] )
  fibs_rec(n - 1, fibs_array)
end

p fibs_rec(9)



#Build a method #merge_sort that takes in an array 
#and returns a sorted array, using a recursive merge sort methodology.

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