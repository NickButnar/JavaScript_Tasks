function derive(coefficient, exponent) {
  let result;
  const multiply = coefficient * exponent;
  if (exponent > 2) {
    exponent -= 1;
  };

  if (exponent <= 1) {
    exponent = exponent+1
  }
  if (exponent < 0) {
    exponent = 2;
  }

  result = `${multiply}x^${exponent}`;
  return result;
}

// console.log(derive(7, 8)); //"56x^7"
console.log(derive(18, -2));
