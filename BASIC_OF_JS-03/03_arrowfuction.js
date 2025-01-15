//                  THIS      //

const user={
    username :'jatin',
    prices:999,
    welcome_message:function(){
console.log(`${this.username},welcome to website`);
console.log(this);

    }
    
}
// user.welcome_message()

// user.username="ketan";
// user.welcome_message()



// THIS GIVE THE CURRENT VALUE OF THE OBJECT OR VALUE OF THE OBJECT//

// console.log(this);

//IMPORTANT//
//THIS GIVE THE {} AND IF WE USE IN BROWSER IT GIVE WINDOW//

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

//  const chai = function () {
//      let username = "hitesh"
//      console.log(this.username);
//  }
//  chai()

//                  ARROW FUCTION////

const chai=()=>{
         let username = "hitesh"
      console.log(this);


}


// const one=(num1,num2)=>{
//     return num1+num2

// }


//  const one=(num1,num2)=>(num1+num2)
// console.log(one(2,4))


// arrow function have object.........................//

const one =(num1,num2) => ({username:'jatin'})
console.log(one(2,4))



//////////thankyou