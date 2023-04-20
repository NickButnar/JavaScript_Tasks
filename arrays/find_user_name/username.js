const users = ['John', 'Mary', 'David', 'Nick', 'Kate'];

const checkUserName = (users, verifiableUser) => {

  users.forEach((element, index, array) => {
    if (users.includes(verifiableUser)) {
      return solution = (`Welcome ${verifiableUser}`)
    }
    else {
       throw new Error (`User ${verifiableUser} is undefind`)
    }
  })
  return solution;
}

console.log(checkUserName(users, "David"));
console.log(checkUserName(users, "Julia"));
