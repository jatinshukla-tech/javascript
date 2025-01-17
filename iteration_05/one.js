//for
for(let i=0; i<=10; i++){
    // console.log(i);
}

for(let i=0; i<=10; i++){
    const elements=i;
    if(elements==5){
        // console.log("5 is the best no");
    }
    // console.log(elements);
    

}

for(let i=1; i<=10; i++){
    //  console.log(`Outer loop is ${i}`);
     for(let j=1; j<=10; j++){
        //  console.log(`Inner loop is ${j}`);
        //  console.log(i + '*' + j +'='+ i*j );
         
    }
}

let myarray=["iron man","batmen","superman"]
console.log(myarray.length);


for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
    
}




// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}