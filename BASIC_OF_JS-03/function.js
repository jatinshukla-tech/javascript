function saymyname(){
    console.log("jatin shukla");
    
}
// saymyname()

function addtwnumber(number1,number2){
    console.log(number1+number2)


}
// addtwonumber(4,9)
function addtwonumber(number1,number2){
   let result=(number1+number2)
    return result
}
// const result = addtwnumber(3,6)
// console.log(result);
function isloggedin(username="sam"){
    if (!username) {
        console.log("PLEASE ENTER THE USER NAME");
        return
        
        
    }  
    return `${username} just logged in `
}
console.log(isloggedin())

