from linkedList import linkedList

linkedList = linkedList()

linkedList.insertEnd(12)
linkedList.insertEnd(133)
linkedList.insertEnd(5678)
linkedList.insertStar(66789)

linkedList.traverseList()
print('')

linkedList.remove(66789)

linkedList.traverseList()
print('')

linkedList.remove(5678)

linkedList.traverseList()