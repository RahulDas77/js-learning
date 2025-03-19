let score = 36
console.log(typeof score) //number

let num = "36"
console.log(typeof num); //string

let run = Number (num)
console.log(typeof run); //number

let money = null
console.log(money); //null

let currency = Number(money)
console.log(currency); //0

let length;
console.log(length); //undefined

let username = "raul123"
let id = Number(username)
console.log(id); //NaN

//true <=> 1 and false <=> 0 visce versa
//"" => false and "anything" => true