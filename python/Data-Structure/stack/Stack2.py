class Stack:
  def __init__(self, size):
    self.stack = []
    self.size = size
  
  def push(self, item):
    if len(self.stack) == self.size:
      print('Stack is full!!!')
    else:
      self.stack.append(item)

  def pop(self):
    result = -1

    if self.stack == []:
      print('Stack is empty')
    else:
      result = self.stack.pop
    return result
  
  def display(self):
    if self.stack == []:
      print('Stack is empty!!!')
    else:
      print('Stack Data: ')
      for item in reversed(self.stack):
        print(item)

exit = False
stack = Stack(3)

while not exit:

  print('\nChoose an operation: ')
  print('1) Push')
  print('2) Pop')
  print('3) Display')

  operation = input()

  def pushOp():
    num = input('Insertat a Number')
    if num.isdigit():
      global stack
      stack.push(num)
    else:
      print('Invalid Input')

  def popOp():
    global stack
    n = stack.pop()

    if n != -1:
      print('Deleted data ' +  str(n))

  def displayOp():
    global stack
    stack.display()

  def exitOp():
    global exit
    exit = True
    print('Exiting')

  switch = {
    '1': pushOp,
    '2': popOp,
    '3': displayOp
  }

  switch.get(operation, exitOp)()