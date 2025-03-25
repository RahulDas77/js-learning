// singlton
//Object.create()

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Rahul",
    "full name" : "Rahul Das", //can't be called using dot operation
    [mySym] : "locked",
    age : 21,
    location : "Kolkata",
    email : "rahul@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Thrusday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.age = 20
// Object.freeze(jsUser)
// jsUser.age = 22 //doesn't change any value 
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello user");    
}
jsUser.greeting2 = function() {
    console.log(`hello user,${this.name}`);  
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

