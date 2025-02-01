// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeTousername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const jatin = new User("jatin","jatinshukla@123","123");
// console.log(jatin.encryptPassword())
// console.log(jatin.changeTousername())

// BEHIND THE SCENCE
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password



}
User.prototype.encryptPassword=function(){

 return `${this.password}abc`
}

User.prototype.changeTouppercase=function(){
        return `${this.username.toUpperCase()}`

}
const tea = new User("jatin","jatinshukla@123","123")
console.log(tea.encryptPassword())
console.log(tea.changeTouppercase())