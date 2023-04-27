const user = {
  name: "Alex",
  country: "Georgia",
  age: 77,
  showAge: function() {
    return this.age
  }
}

Object.prototype.showCountry = function () {
  console.log(this.country)
}
user.showCountry()

const person = Object.create(user)

console.log(person.name)
console.log(person.showAge())

person.showCountry()
