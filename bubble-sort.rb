#creating array with random numbers and random length
random_array = []
(rand(5..50)).times { random_array.push(rand(1..50)) }
p random_array

#bubble-sorting the array
def bubble_sort(array)
  loop do
    ordered = false
    (array.length - 1).times { |x| 
      unless (x + 2) == array.length
        if array[x] > array[x + 1]  
          array[x], array[x + 1] = array[x + 1], array[x]
          ordered = true
        end
      end
    }
    break if !ordered
  end 
array
end

p bubble_sort(random_array)