is_male = True
is_tall = False

def is_male(ismale, istall):
  if ismale and istall:
    print('You are a tall both')
  elif ismale and not(is_tall):
    print ('You are a short male')
  elif not(ismale) and is_tall:
    print ('You are not a male but are tall ')
  else :
    print('You are either not male or not tall or both')

is_male(is_male, is_tall)
