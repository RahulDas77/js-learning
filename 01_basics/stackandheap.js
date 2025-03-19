//Primitive datatypes uses stack (gives a copy )

let myName = "rahul das"
let name = myName
name = "agibha"

console.log(myName);
console.log(name);
//------------------------------------
//Non-Primitive type uses heap (gives reference)

let userOne={
    email:"rahul@gmail.com",
    age: 24
}
let userTwo = userOne
userTwo.age=21
console.log(userOne);
console.log(userTwo);


