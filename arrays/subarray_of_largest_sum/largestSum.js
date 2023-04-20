const valuesArray = [2, -2, -1, 4, -1, 1, 2];

const getMaxSumOfArray = (arr) => {
  let currentSum = 0;

  return arr.reduce((maxSum, currentValue) => {
    currentSum += currentValue;
    if (currentSum > maxSum) {
      return currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
    return maxSum;
  }, 0);
};
console.log(getMaxSumOfArray(valuesArray))
