const values = [5, 3, 8, 1];
let result = [];

function filterRange(arr, start, end) {
  const filteredArr = arr.filter((element) => {
    if (element >= start && element <= end) {
      result.push(element);
      return true;
    }
    return false;
  });
  return filteredArr;
}

const filteredValues = filterRange(values, 3, 8);
console.log(filteredValues);
