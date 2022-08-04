def caesar_cipher(string, shift)
down_alphabet = ('a'..'z').to_a
shifted_dw_alphabet = down_alphabet.rotate(shift)
up_alphabet = ('A'..'Z').to_a
shifted_up_alphabet = up_alphabet.rotate!(shift)
dw_hash = down_alphabet.zip(shifted_dw_alphabet).to_h
up_hash = up_alphabet.zip(shifted_up_alphabet).to_h
final_message = string.gsub(/[a-z]/, dw_hash).gsub(/[A-Z]/, up_hash)
p final_message
end




caesar_cipher('Whoa! This was a challenge!! Does it actually work?', 18)