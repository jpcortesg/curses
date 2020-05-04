list = [
  [1,2,3,4,5,6,7],
  [5,6,7,8,7,343,434,434,1],
  [9,10,11,12,23,12,121,4434,34],
  [13,14,15,16,17,3232,323,4],
  [212,12,212,212,22,3,3,44,54,34,32]
]

def recMat(list):
  a = len(list)-1
  b = len(list[len(list)-1])-1
  i = 0
  j = 0

  print(a)
  print(b)
  if a != i or b != j:
    print('[ ' , end = '')
    recMat2(list, a, b, i, j)
  else:
    print('none list')

def recMat2(list, a, b, i, j):
  if a == i and b == j:
    print (str(list[a][b]) + ' ]')
  else:
    if j < len(list[i]) :
      print(str(list [i][j]) + ', ' ,end="")
      recMat2(list, a, b, i, j+1)
    elif j == len(list[i]) and i < a:
      print('')
      recMat2(list, a, b, i+1, 0)