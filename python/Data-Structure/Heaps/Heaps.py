class Heap(object):

  HEASIZ = 10

  def __init__(self):
    self.heap = [0]*Heap.HEASIZ
    self.currPos = -1

  def insert(self, item):
    if self.isFull():
      print('Heap is full')
      return 
    self.currPos = self.currPos + 1
    self.heap[self.currPos] = item
    self.fixUp(self.currPos)

  def fixUp(self, index):
    parInd = int((index-1)/2)

    while parInd >= 0 and self.heap[parInd] < self.heap[index]:
      temp = self.heap[index]
      self.heap[index] = self.heap[parInd]
      self.heap[parInd] = temp
      index = parInd
      parInd = int((index-1)/2)

  def getMax(self):
    result = self.heap[0]
    self.currPos = self.currPos-1
    self.heap[0] = self.heap[self.currPos]
    del self.heap[self.currPos+1]
    self.fixDown(0, -1)
    return result

  def fixDown(self, index, upto):

    if upto < 0:
      upto = self.currPos

    while index <= upto:
      lef = 2*index+1
      rig = 2*index+2
      if lef <= upto:
        child = None
        if rig > upto:
          child = lef
        else:
          if self.heap[lef] > self.heap[rig]:
            child = lef
          else:
             child = rig
        if self.heap[index] < self.heap[child]:
          temp = self.heap[index]
          self.heap[index] = self.heap[child]
          self.heap[child] = temp
        else:
          break
        index = child
      else:
        break

  def heapsort(self):
    for i in range(0, self.currPos+1):
      temp = self.heap[0]
      print('%d ' % temp)
      self.heap[0] = self.heap[self.currPos-i]
      self.heap[self.currPos-i] = temp
      self.fixDown(0, self.currPos-i-1)

  def isFull(self):
    if self.currPos == Heap.HEASIZ:
      return True
    else:
      return False
    