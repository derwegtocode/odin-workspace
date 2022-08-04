def caesar_cipher(string, shift)
  #create the alphabets in up and downcase
down_alphabet = ('a'..'z').to_a
shifted_dw_alphabet = down_alphabet.rotate(shift)
up_alphabet = ('A'..'Z').to_a
shifted_up_alphabet = up_alphabet.rotate(shift)
#create the hashes where the key is the letter's original position and the value is the shifted letter
dw_hash = down_alphabet.zip(shifted_dw_alphabet).to_h
up_hash = up_alphabet.zip(shifted_up_alphabet).to_h
#Replacing the letters in the string with the new values according to the places shifted
final_message = string.gsub(/[a-z]/, dw_hash).gsub(/[A-Z]/, up_hash)
p final_message
end




caesar_cipher('Whoa! This was a challenge!! Does it actually work?', 18)