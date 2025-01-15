//... is the rest or spilt operator is use is dpend upon user example is  below of it
// function calcutioncart(...num){
//     return num;

// }
// console.log(calcutioncart(200,500,600,800))

// you give only one parameter and extract multiple value using rest operator.... //

 function calcutioncart(val1 ,val2,...num){
    return num;

 }
calcutioncart(500,600,800,700)    
// example of split operator//


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

//                              SCOPE IN VARIABLES               ///
// GOBAL VARIABLE- ARE THOSE VARIABLE THAT IS ACESS IN THE WHOLE PROGAM. DO NOT INCLUDE VAR.//
// LOCAL VARIABLE - ARE THOSE WHICH IS DECLARE INSIDE FUNCTION ,LOOP,CONDITION STATMENT.// 

// EXAMPLE OF NESTED SCOPE//
function one(){
   const username='jatin'

    function two(){
        const website='youtube'
// console.log(username);


    }
    two()
    // console.log(website);
    
    
}
one()
//                                   HOSTING              ///


console.log(addone(5));// calling the addone funtion it give result =6

function addone(num){
    return num+1;
}



console.log(addtwo(9));//its give error becoz we store function in variable its give error that error is hosting
const addtwo=function(num1){
    return num1+2;
}