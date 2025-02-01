class user {
    constructor(email,password) {
        this.email=email
        this.password=password
    }
    get(){
        return this._password
    }
    set(value){
this._password=value
    }
}
const jatin = new user("jatin@123",'jatin')
console.log(jatin.password);
