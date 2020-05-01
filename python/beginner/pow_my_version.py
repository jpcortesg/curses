def pow_my(base, pow):
  if(pow == 1): return base
  else: return base * pow_my(base, pow-1)

print(pow_my(4, 2))