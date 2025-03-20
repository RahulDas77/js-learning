let name = "rahul"
let age = 21
console.log(`hello , my name is ${name} and my age is ${age}`); //string interpolation

let user = "rahuldas"
let username = new String ("Rahuldas")
console.log(user); //-> rahuldas
console.log(username);  //-> [String: 'Rahuldas']

console.log(user.length);
console.log(user.toUpperCase());
console.log(user.charAt(3));
console.log(user.indexOf(4));
let substr = username.substring(0,4)
console.log(substr);

let slicestr = username.slice(-7,5)
console.log(slicestr);

let trimstr = "    rahuldas     "
console.log(trimstr);
console.log(trimstr.trim());

let url = "www.google.com"
console.log(url);
console.log(url.replace(".com",".in"));

let text = "Hello world, welcome to the universe.";
let result = text.includes("come");
console.log(result);

let line = "rahul-das"
let splitline = line.split("-")
console.log(splitline);

