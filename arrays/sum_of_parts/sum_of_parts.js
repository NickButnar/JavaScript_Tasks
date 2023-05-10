const NUMBERS_ARRAY = [0, 1, 3, 6, 10];

function partsSums(NUMBERS_ARRAY) {
  let newArray = [];
  let sum = NUMBERS_ARRAY.reduce((a, b) => a + b, 0);

  for (let i = 0; i <= NUMBERS_ARRAY.length; i++) {
    newArray.push(sum);
    sum -= NUMBERS_ARRAY[i];
  };
  return newArray;
}

console.log(partsSums(NUMBERS_ARRAY)); // [20, 20, 19, 16, 10, 0]
