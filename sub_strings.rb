dictionary = ["yes", "no", "hello", "day", "are", "is", "how", "do", "am", "be", "think", "feel", "house", "car", "swim", "car", "heaven", "sun", "moon", "park", "will", "won't", "you", "i", "to", "any", "some", "good", "bad"]

def substrings (string, dictionary)

  #splitting the string into words and downcasing them all & selecting from dictionary only included words in string
string_split = string.downcase.split(/\W+/)
included = []
string_split.each do |word| dictionary.any? { |matched| 
  included.push(matched) if word.include?(matched) }  end

  #counting words and returning hash
 
included.reduce(Hash.new(0)) do |matches, word|
  matches[word] += 1
  matches
end
end


p substrings("Today is a good day, I feel good and I am happy. How are you doing?", dictionary)