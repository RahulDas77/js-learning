// Dates

let mydate = new Date()
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let newdate = new Date(2025,0,15,9,4)
console.log(newdate.toLocaleString());

let typedate = new Date("2026-05-13")
console.log(typedate.toLocaleString());

let timestamp = Date.now()
console.log(timestamp);
console.log(typedate.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(mydate.toLocaleString('default',{
    weekday: "long",
}));
