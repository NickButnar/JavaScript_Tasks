const values = "12497563";
const valuesArray = values.split("");

const findLargestValue = valuesArray.find((element, index, array) => {
  if (array[index] > array[index + 1]) {
    return array[index];
  };
})
console.log(findLargestValue);
