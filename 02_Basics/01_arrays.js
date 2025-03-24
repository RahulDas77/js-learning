// array

const myArr = [2,4,1,7,5]
const myheros = ['ironman','superman','hulk']

const myArr2 = new Array(1,5,7,3,4)
console.log(myArr[2]);

// array methods

myArr.push(9)
myArr.pop()
myArr.push(0)

myArr.unshift(8)
myArr.shift()

console.log(myArr.includes(4));
console.log(myArr.indexOf(7));

const newArr = myArr.join() 
console.log(myArr);
console.log(newArr); //gives string

console.log("A-",myArr);
const myn1 = myArr.slice(1,3) //works on a copy 
console.log(myn1);
console.log("B-",myArr);
const myn2 = myArr.splice(1,3) //works on the original
console.log(myn2);
console.log("C-",myArr);


//slice returns a list of values (excluding the range)
//splice pops the list of values (inluding the range)
