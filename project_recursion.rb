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

fibs(9)
#Now write another method 
#fibs_rec which solves the same problem recursively. 
#This can be done in just 3 lines 
#(or 1 if you’re crazy, but don’t consider 
#either of these lengths a requirement… just get it done).