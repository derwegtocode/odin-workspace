
def caesar_cipher(string, shifts)
  #creating an index of letters and numbers
  indexed_alphabet = Hash.new
  alphabet = [*'a'..'z']
  alphabet.each_with_index.map {|letter, index| indexed_alphabet[letter] = index}
  
  #splitting the string into letters and converting the letters into numbers
  array_of_string = string.downcase.split('')
  numbers_array = Array.new
  numbers_array = array_of_string.map! { |item| indexed_alphabet.include?(item) ? item = indexed_alphabet[item] : item}
  #shifting the numbers and reasigning the letters
  numbers_array.map! { |number| number.to_i + shifts}
  
  coded_array = Array.new
  numbers_array.map { |index| index > 25? index -= 26 : index = index }
  
  coded_array << numbers_array.collect { |letter, index| letter if index == indexed_alphabet[letter].to_i}
  p coded_array.join('')
  
end



caesar_cipher('Holaz!!', 5)