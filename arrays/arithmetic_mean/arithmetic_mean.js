const numbers = [3, 6, 2, 8, 1, 9, 4];;

const sumOfValues = numbers.reduce((acc, curr) => {
  return acc + curr;
});
const arithmeticMean = sumOfValues / numbers.length;

console.log(`The arithmetic mean of the array elements is: ${arithmeticMean}`);
