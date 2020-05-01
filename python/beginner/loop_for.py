for letter in 'Hello my name is Juan':
  if(letter != ' '):
    print(letter)

print('Finish loop for')

def printString (string):
  for letter in string:
    if(letter != ' '):
      print(letter)
  
  print('Finsh Function')

printString('Hello My Name Is Juan')

friends = ['Jim', 'Karen', 'Kevin']

printString(friends)

for i in friends:
  print(i)
print ('Finish Loop For')

friends = ['Jim', 'Karen', 'Kevin', 'Gorge', 'Jeffry', 'Thomas']

for index in range(len(friends)):
  print(friends[index])

def index_one(num):
  if(num == 0): print('First Iteration')
  else: 
    print(str(num) + ' Not is a first iteration')
    index_one(num-1)

index_one(8)