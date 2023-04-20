let calculator = {
  addMethod: function(name, func) {
    this[name] = func;
  },
};

calculator.addMethod("sum", function(firstValue, secondValue) {
  return firstValue + secondValue;
});

calculator.addMethod("mul", function(firstValue, secondValue) {
  return firstValue * secondValue;
});

console.log(calculator.sum(1, 2));
console.log(calculator.mul(3, 4));
