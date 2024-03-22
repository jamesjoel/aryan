/*
    Heigher Order Function
    only works with Array
    
    .forEach()
    .map()
    .filter()
    .reduce()

*/

let arr = [50, 18, 12, 90, 30, 17, 10, 16];

// let arr2 = arr.map((value, index, array)=>{
//     console.log(value);
// })
// console.log(arr2)

let arr2 = arr.filter((value, index, array)=>{
    return value < 10;
})

console.log(arr2)




