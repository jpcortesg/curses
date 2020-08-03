from Node import Node

class BalancedTree(object):

  def __init__(self):
    self.rootNode = None
  
  def insert(self, data):

    pareNode = self.rootNode

    if self.rootNode == None:
      pareNode = Node(data, None)
      self.rootNode = pareNode
    else:
      pareNode = self.rootNode.insert(data, self.rootNode)
    self.rebalanceTree(self)

  def rebalanceTree (self, pareNode):
    self.setBalance(pareNode)

  def setBalance(self, Node):
    node.balance = (self.height(node.right) - self.height(node.left))

  def height(self, node):
    if node == None:
      return -1
    else:
      return 1 + max(self.height(node.left), self.height(node.right))