class Node(object):
  def _init__(self, data, parNode):
    self.data = data
    self.parNode = parNode
    self.left = None
    self.right = None
    self.balance = 0

  def insert(self, data, parNode):

    if data < self.data:
      if not self.left:
        self.left = Node(data, parNode)
      else:
        self.left.insert(data, parNode)
    else:
      if not self.right:
        self.right = Node(data, parNode)
      else:
        self.right.insert(data, parNode)
    return parNode

  def travInor(self):

    if self.left:
      self.left.travInor()
    print(self.data)
    if self.right:
      self.right.travInor()

  def getMax(self):
    if not self.right:
      return self.data
    else: 
      return self.right.getMax()

  def getMin(self):
    if not self.left:
      return self.data
    else:
      return self.left.getMin()