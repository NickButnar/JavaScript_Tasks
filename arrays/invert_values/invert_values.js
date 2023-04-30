function invert(array) {
let result = []
  array.forEach((element) => {
    if (element > 0) {
      result.push(element);
    }
    if (element < 0) {
      result.push(element)
    }
  })
  return result.sort((a, b) => a - b);
}

console.log(invert(array = [-1, -2, -3, -4, -5])); // [-5, -4, -3, -2, -1]

console.log(invert(array = [1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
