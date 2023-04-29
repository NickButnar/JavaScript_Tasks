const isConsecutive = (str) => {
  for(let i = 0; i < str.length; i++){
    if (str.slice(i).indexOf(str[i - 1]) > 0) {
      return false;
    }
  }
  return true;
}
console.log(isConsecutive("112233")); // true
console.log(isConsecutive("11223311")); // false
