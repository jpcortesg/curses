class Node(object):

  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

  def insert (self, data):
    if data < self.data:
      if not self.left:
        self.left = Node(data)
      else:
        self.left.insert(data)
    else:
      if not self.right:
        self.right = Node(data)
      else:
        self.right.insert(data)
    
  def remove(self, data, parNode):
    if data < self.data:
      if self.left is not None:
        self.left.remove(data, self)
    elif data > self.data:
      if self.right is not None:
        self.right.remove(data, self)
    else:
      if self.left is not None and self.right is not None:
        self.data = self.right.getMin()
        self.right.remove(self.data, self)
      elif parNode.left == self:
        if self.left is not None:
          temNode = self.left
        else:
          temNode = self.right
        parNode.left = temNode
      elif parNode.right == self:
        if self.left is not None:
          temNode = self.left
        else:
          temNode = self.right
        parNode.right = temNode
        
  def getMin(self):
    if self.left is None:
      return self.data
    else:
      return self.left.getMin()

  def getMax(self):
    if self.right is None:
      return self.data
    else:
      return self.right.getMax()

  def traverseInorder(self):
    if self.left is not None: 
      self.left.traverseInorder()
    print(self.data)
    if self.right is not None: 
      self.right.traverseInorder()