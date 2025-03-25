function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

// sayMyName()

function addTwoNumbers(num1,num2) {
    return num1 + num2
}
const sum = addTwoNumbers(1,6)
// console.log(sum);

function loginUserMessage(username) {
    if (!username){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rahul"))
console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,100,60,250));

const user = {
    username : "Rahul",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)
// handleObject({
//     username : "Rahul",
//     price : 599
// })

const myArr = [200,100,520,410]

function return2ndValue(getArray){
    return getArray[1]
}

console.log(return2ndValue(myArr));
