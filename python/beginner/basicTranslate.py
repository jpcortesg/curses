# Jp Lenguaje
# vowels -> Jp
# ---------------
# dog -> dJpg
# cat -> cJpt

def translate(phrase):
  if phrase != None:
    vowels = 'AEIOUaeiou'
    translation = ''
    for let in phrase:

      for vow in vowels:
        if let == vow:
          translation = translation + 'Jp'
          break
        elif vow == 'u':
          translation = translation + let

    return translation
  else:
    print('Error, phrase empty')

def translate2(phrase):
  translation = ''
  for let in phrase:
    if let in 'AEIOUaeiou':
      translation = translation + 'Jp'
    else:
      translation = translation + let
  return translation

phrase = input('Enter a phrase: ')

print(translate(phrase))
print(translate2(phrase))