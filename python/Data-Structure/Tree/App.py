from BinarySearchTry import BST

bst = BST()

active = True

while active:
  this = input('Enter to Opc: ')

  if (this == '1'):
    otheractive = True
    while otheractive == True:
      this = input('Enter Number for insert: ')
      if this == 'e':
        otheractive = False
      else:
        bst.insert(int(this))
  elif (this == '2'):
    this = int(input('Enter Number for deleted: '))
    bst.remove(this)
  elif (this == '3'):
    bst.travInor()
  elif (this == '4'):
    print(bst.getMin())
  elif (this == '5'):
    print(bst.getMax())
  else:
    print('Finish')
    active = False