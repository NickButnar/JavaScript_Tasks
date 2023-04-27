const isConsecutive = (str) => {
  const strArray = str.split("");
  console.log(strArray);

  if (strArray.length < 2) {
    return false;
  }

  for (let i = 0; i < strArray.length - 1; i++) {
    if (strArray[i] === strArray[i + 1]) {
      return true;
    }
    if (strArray[i] !== strArray[i + 1]) {
      return false
    }
  }
}

console.log(isConsecutive("112233"));
console.log(isConsecutive("11223311"));
