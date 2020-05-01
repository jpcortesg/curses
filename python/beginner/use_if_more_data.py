number comparison

def max_num(num1, num2, num3):
  if num1 >= num2 and num1 >= num3:
    return num1
  elif num2 >= num1 and num2 >= num3:
    return num2
  else:
    return num3

num1 = 34
num2 = 300
num3 = 45

print(max_num(num1, num2, num3))
print(max(num1, num2, num3))

