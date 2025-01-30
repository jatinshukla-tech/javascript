// const promiseOne= new Promise(function(resolve,reject){;



// setTimeout(function () {
//     console.log("Async task is completed")
    
//     resolve()
// },1000)
// })

// promiseOne.then(function () {
//     console.log("promise task is occurs");
    
    
// })


// new Promise((resolve, reject) => {
//     setTimeout(function () {
//         console.log("Asyn task 2 completed");
    
//      resolve()   
//     },2000)
// })
// .then(function () {
//     console.log("task in reslove state");
    
    
// })



// const PromiseThree= new Promise((resolve, reject) => {
//     setTimeout(() => {
        
  
//         console.log("asyn task is there")
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000);
// })
// PromiseThree.then(function (user) {
//     console.log(user);
    
    
// })


// const promiseFour= new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         let error=false
//         if (!error) {
//             resolve({username:'jatin',email:'jatin123',password:123})
            
//         }
//         else{
//        reject("something went wrong")}
//     },1000);
// })
//         promiseFour.then((user)=>{
//            console.log(user);
//            return user.username
           
//         }).then((username)=>{
//             console.log(username);
            
//         }).catch((error)=>{
//             console.log(error);
            
//         })


const PromiseFive = new Promise((resolve, reject) => {
    
    setTimeout(() => {
                 let error=false
                 if (!error) {
                     resolve({username:'jatin',email:'jatin123',password:123})
                    
                 }
               else{
               reject("something went wrong")}
             },1000);

})
// async function jatin() {
//     try{
//         const fun = await PromiseFive
//     console.log(fun);
//     }
//     catch(error){
//         console.log(error);
        
//     }
    
// }
// jatin();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function (Response){
    return Response.json()
})
.then(function(data){
    console.log(data);
    
})
.catch(function(error){
    console.log(error);
    
})