const elements = ["Keep", "Remove", "Keep", "Remove", "Keep"];
const result = [];

elements.forEach((element, index, array) => {
  if (index % 2 === 0) {
    result.push(array[index]);
  }
});

console.log(result);
