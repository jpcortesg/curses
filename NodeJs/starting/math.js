const math = {};

function add(x1, x2){
  return x1 + x2;
}

function substract(x1, x2){
  return x1 - x2;
}

function multiply(x1, x2){
  return x1 * x2;
}

function divide(x1, x2){
  if (x2 == 0) return 'it can not';
  else return x1 / x2;
}

math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;

module.exports = math;