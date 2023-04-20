const colors = ["red", "green", "blue", "red", "yellow", "green", "red", "blue", "purple"];
let uniqueColors = [];
const findValueOfCollors = colors.forEach((element, index, array) => {
  if (!uniqueColors.includes(colors[index])) {
    uniqueColors.push(colors[index]);
  }
})
const value = uniqueColors.length
console.log(value);
