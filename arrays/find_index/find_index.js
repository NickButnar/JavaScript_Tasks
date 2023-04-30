function secondSymbol(string, symbol) {
  const firstSymbol = string.indexOf(symbol);
  if (firstSymbol === -1) {
    return -1;
  }

  const secondSymbol = string.indexOf(symbol, firstSymbol + 1);
  if (secondSymbol === -1) {
    return -1
  }
  return secondSymbol;
}

console.log(secondSymbol("Hello world!!!", "l")); // 3
console.log(secondSymbol('Hello world!!!', 'A')); // -1
