def translate(phrase):
  con = 0

  if len(phrase) != con:
    return translate2(phrase, con)  
  else:
    return 'None phrase'

def translate2(phrase, con):

  translation = ''

  if len(phrase) == con:
    return translation
  else:
    if phrase[con] in 'AEIOUaeiou': 
      translation = translation + 'Jp'
      return translation + translate2(phrase, con+1)
    else:
      translation = translation + phrase[con]
      return translation + translate2(phrase, con+1)


print(translate('Hello'))