function sumFactorial(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let factorial = 1;

    for (let j = 1; j <= arr[i]; j++) {
      factorial *= j;
    }
    sum += factorial;
  }
  return sum;
  }

  console.log(sumFactorial([4, 6])) //744
