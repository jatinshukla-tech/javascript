const tinderuseer=new Object();
tinderuseer.name="samay"
tinderuseer.id=3432;
tinderuseer.email="samay@1234"
tinderuseer.islogin=false;
console.log(tinderuseer);
 

const regularuser={
    name:{
        full_name:{
            firstname:"jatin",
            lastname:"shukla",
        }

    }
}
// console.log(regularuser.name.full_name);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={...obj1,...obj2}
// console.log(obj3);
// console.log(Object.keys(tinderuseer));
// console.log(Object.values(tinderuseer));
// console.log(Object.entries(tinderuseer));

const course={
    cousename:"js in hindi",
    courseid:999,
    courseInstuctor:"hitesh"
}

const {courseInstuctor:instuctor}=course
console.log(instuctor);

