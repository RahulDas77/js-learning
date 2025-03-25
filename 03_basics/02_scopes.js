//var c = 300
let a = 500

if (true) {
    let a = 10
    const b = 20
    // console.log("inner:",a);
}

// console.log(a);


function one(){
    const username = "rahul"

    function two(){
        const website = "youtube.com"
        console.log(username); 
    }
    // console.log(website); X
    two()
}
// one()

if (true) {
    const username = "rahul"
    if (username === "rahul") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); X
}
// console.log(username); X
// ++++++++++++++++++++++ INTERESTING +++++++++++++++++++++

// addone(5)
function addone(num){
    return num + 1
}

addone(5)

//addTwo(5) X
const addTwo = function(num){
    return num + 2
}

addTwo(5)