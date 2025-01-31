function number(num) {
    return num*5
    
}
// number.power=2
// console.log( number(5));
// console.log(number.power);
// console.log(number.prototype);

function user(username,score) {
    this.username = username
    this.score = score
    
   user.prototype.increment=function(){
    this.score++;
   }
   user.prototype.printme=function () {
    console.log(`price of ${this.score}`);
    
    
   }
}

const chai=new user("jatin",25)
chai.printme()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/