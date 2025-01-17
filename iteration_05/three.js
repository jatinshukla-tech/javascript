// for of
const arr=[1,2,3,5,6,7]
for (const num of arr) {
    // console.log(num);
    
    
}

const greeting="Hello World!"
for (const great of greeting ) {
    // console.log(`your word is ${great}`);
    
    
}

// MAP key values pair or unique value store in it ..//
const map = new Map()
map.set("IN","india")
map.set("US","united state")
map.set("fe","french")
console.log(map);

for (const [key,value] of map) {
    //console.log(key +`=`+value);

}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }