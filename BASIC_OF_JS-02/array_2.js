const marvel_hero=["loki","thor","antman"]
const dc_hero=["batman","superman","flash"]
// marvel_hero.push(dc_hero);// IT CREATE ARRAY OF ARRAY 
// console.log(marvel_hero);
const all_hero=marvel_hero.concat(dc_hero);// IT ADD BOTH ARRAY INTO THID ARRAY 
//console.log(all_hero);
const AAA=[1,2,3,[5,7],[8,10,11,2],[15]]
const another_arr=AAA.flat(Infinity)
console.log(another_arr);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));