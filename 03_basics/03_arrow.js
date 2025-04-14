const user = {
    username : "rahul",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} ,welcome to website`);  
        console.log(this)  
    }
}

// user.welcomeMessage()
// user.username = "rupam"
// user.welcomeMessage() 

// console.log(this);

function code(){
    let username = "rahul"
    console.log(this.username) //undefined
}
// code()

const creed = function () {
    let username = "rahul"
    console.log(this.username) //undefined
}
// creed()

const game = () => {
    let username = "rahul"
    //console.log(this.username);  //undefined 
    console.log(this); //{}
       
}
// game()

const addTwo = (num1,num2) => {   //explicit return
    return num1 + num2
}
// console.log(addTwo(5,8));

const twoAdd = (num1,num2) => (num1 + num2)  //implicit return

// console.log(twoAdd(8,3));