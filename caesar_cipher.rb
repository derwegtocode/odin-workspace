
def caesar_cipher(string, shift)
coded = string.gsub(/[^a-zA-Z]/, '').bytes
coded.map! { |number| number + shift}
coded.map! { |number| number > 122 || number.between?(91, 97) ? number -= 26 : number}
coded.map! { |number| number.chr}
#coded = coded.join('')
final_message = string.tr('^a-zA-Z', coded.join)

p final_message
end


#def caesar_cipher(string, shifts)
 #creating an index of letters and numbers
#  indexed_alphabet = Hash.new
#  alphabet = [*'a'..'z']
#  alphabet.each_with_index.map {|letter, index| indexed_alphabet[letter] = index}
  
  #splitting the string into letters and converting the letters into numbers
#  array_of_string = Array(string([a-zA-Z]).downcase.split(''))
#  numbers_array = Array.new
#  numbers_array = array_of_string.map {|item| item = indexed_alphabet[item]}
  
  #shifting the numbers and reasigning the letters
#  numbers_array.map! { |number| number + shifts }
#  numbers_array.map! { |index| index > 25 ? index -= 26 : index }
#  coded_array = Array.new
#  coded_array = numbers_array.map { |item| item = indexed_alphabet.filter_map { |key, value|
#    key if value == item} }
#  coded = coded_array.flatten.join("")
#  puts string
  
#end



caesar_cipher('Cacaramaz?!', 5)