from Node import Node

class linkedList(object):
  def __init__(self):
    self.head = None
    self.counter = 0

  def traverseList(self):
    actualNode = self.head
    while actualNode is  not None:
      if(actualNode.nextNode is None):
        print(str(actualNode.data))
      else:
        print(str(actualNode.data) + ', ', end = '')
      actualNode = actualNode.nextNode
  
  def insertStar(self, data):
    self.counter += 1
    newNode = Node(data)
    if not self.head:
      self.head = newNode
    else:
      newNode.nextNode = self.head
      self.head = newNode

  def size(self):
    return self.counter

  def insertEnd(self, data):
    self.counter += 1
    newNode = Node(data)
    actualNode = self.head
    if not self.head:
      self.head = newNode
    else:
      while actualNode.nextNode is not None:
        actualNode = actualNode.nextNode
      actualNode.nextNode = newNode

  def remove(self, data):
    self.counter -= 1
    if self.head:
      if data == self.head.data:
        self.head = self.head.nextNode
      else:
        self.head.remove(data, self.head)