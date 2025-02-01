class User {
    constructor(Username) {
        this.Username=Username
        
    }
    logMe(){
        console.log(`user just login ${this.Username}`);
        
    }
}

class Teacher extends User {
    constructor(Username, email , password) {
        super(Username)
        this.email
        this.password
   
        
    }
    addcourse(){
        console.log(`USER NAME IS ${this.Username}`);
        
    }
}
const student = new Teacher("jatin",'@gmail.com',"123")
student.logMe()
