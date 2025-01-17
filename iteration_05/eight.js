// reduce//
const mynum=[1,2,3]
// const total = mynum.reduce(function (acc,cuu) { 
//     console.log(`${acc} and ${cuu}`);
//     return acc+cuu;
    
    
// },0)
// console.log(total);

const temp=mynum.reduce((acc,curr)=> acc+curr,0

)
console.log(temp);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

