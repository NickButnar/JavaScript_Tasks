let string = "background-color";
const stringArray = string.split("-");

const camelCaseArray = stringArray.map((element, index) => {
  if (index === 0) {
    return element;
  }
  return element.charAt(0).toUpperCase() + element.slice(1);
})

const camelCaseString  = camelCaseArray.join("");
console.log(camelCaseString)
