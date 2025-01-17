const num=[1,2,3,4,5,6,7,8,9,10];

// num.forEach((element) =>{  
//     console.log(element+10);
//     return element
    
// }
// );
// const val=num.map(num=>{
//     return num +10
// })
// console.log(val);
const mynum=num.map((num)=> num*10 ).map( (num) => num+1).filter((num)=>num>= 40)

console.log(mynum);

