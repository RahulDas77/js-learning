const instaUser = new Object() //singlton
// const instaUser = {} //non-singlton

instaUser.id = "101Abc"
instaUser.name = "rahul"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email : "some@gamil.com",
    fullname : {
        userfullname : {
            firstname : "rahul",
            lastname : "das"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

//const obj4 = {obj1,obj2}
//const obj5 = Object.assign({},obj1,obj2,obj3) //{target,source....}
const obj6 = {...obj1, ...obj2 ,...obj3}
// console.log(obj6);

const user = [
    {
        id : "12",
        email : "abc@gmail.com"
    },
    {
        id : "13",
        email : "def@gmail.com"
    },
    {
        id : "14",
        email : "ghi@gmail.com"
    }
]
// console.log(user[1].email)

// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));

// Object de-Structure
const course = {
    coursename : "js lang",
    price : "999",
    cousreInstructor : "Rahul"
}

const {cousreInstructor: Instructor} = course
console.log(Instructor);




