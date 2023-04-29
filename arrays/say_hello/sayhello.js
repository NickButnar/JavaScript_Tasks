const greetings = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];

function validateHello(greet, greetings) {
  let result = Boolean();
  greetings.forEach((element, index, array) => {
    if (array.includes(greet)) {
      result = true;
      return;
    }
  });
  return result;
}

console.log(validateHello("hello", greetings)); //true
console.log(validateHello("hi", greetings)); //false
