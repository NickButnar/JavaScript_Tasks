const numbersArray = [1, 2, 3, 2, 4, 5, 4, 6, 7, 6];

const repeatedNumbers = numbersArray.filter((element, index, array) => {
  return array.indexOf(element) !== index && array.lastIndexOf(element) === index;
}).sort((a, b) => a - b);

if (repeatedNumbers.length > 0) {
  console.log("Repeated numbers:", repeatedNumbers);
} else {
  throw new Error("NO")
}

console.log(repeatedNumbers);
