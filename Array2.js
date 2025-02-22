const marval_heros = ["thor", "ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", " batman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros[3][2]) //The two arrays are merged together.

const allHeros = marval_heros.concat(dc_heros)
console.log(allHeros); //The push and concat  have  a same function..

const all_new_heros = [...marval_heros, ...dc_heros]
console.log(all_new_heros); // th espried are bascially used for sprey the values individually...