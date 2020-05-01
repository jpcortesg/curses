secret_word = 'giraffe'
guess = ''
guess_count = 0
print('You have 3 tries')

while secret_word != guess and guess_count < 3:
  guess = input('Enter secret word: ' )
  guess_count += 1
  print('trie ' + str(guess_count))

if(guess == 'giraffe'):
  print ('You Win!')
else:
  print('Out of Guesses, YOU LOSE!')