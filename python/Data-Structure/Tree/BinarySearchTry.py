from Node import Node

class BST(object):

  def __init__(self):
    self.rootNode = None

  def insert(self, data):
    if self.rootNode is None:
      self.rootNode = Node(data)
    else:
      self.rootNode.insert(data)
  
  def remove(self, dataRem):
    if self.rootNode:
      if self.rootNode.data == dataRem:
        temNode = Node(None)
        temNode.left = self.rootNode
        self.rootNode.remove(dataRem, temNode)
      else:
        self.rootNode.remove(dataRem, None)

  def getMax(self):
    if self.rootNode:
      return self.rootNode.getMax()

  def getMin(self):
    if self.rootNode:
      return self.rootNode.getMin()
    
  def travInor(self):
    if self.rootNode:
      self.rootNode.traverseInorder()