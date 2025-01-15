

const mysym=Symbol("mykey1")
const JSuser={
    name:"jatin",
    age:19,
    [mysym]:"mykey1",
    email:"jatinshukla@123",
    "full name":"jatisshukla",
    location:"luckonow",
    isloggeddin :false

}
//console.log(JSuser.email);//NOT THIS ONE

//console.log(JSuser.email);//WE PREFER THIS TYPE OF SYNTAX FOR PRINTING THIS TYPE OF THINGS
//console.log(JSuser["full name"]);
//console.log(JSuser);
//Object.freeze(JSuser);// WE NOT CHANGE THE VALUE ;

JSuser.greeting=function(){
    console.log("hello user");
    
}
console.log(JSuser.greeting())

JSuser.greetingTwo=function(){
    console.log(`hello user, ${this.email}`);
    
}
console.log(JSuser.greetingTwo())