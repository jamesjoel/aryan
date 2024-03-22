/*  
Array.forEach((value, index, array)=>{
    nothing will be return
})
let newarray =Array.map((value, index, array)=>{
                return somthing
            })

let newarray = Array.filter((value, index, array)=>{
                return condition;
            })

let ans = Array.reduce((accu, value, index, array)=>{
            return value;
        })






*/

let arr = [15, 7, 18, 2, 6, 9, 10, 14, 18, 3];

// let ans = arr.reduce((accu, value)=>{ //  accu = 2, value = 6
//     // if(accu < value){
//     //     return accu;
//     // }else{
//     //     return value;
//     // }
//     return accu < value ? accu : value;
// })

let ans = arr.reduce((acu, value)=> acu > value ? acu : value)
// console.log(ans);

let arr2 = [14, 3, 8, 9, 6, 2, 0, 17, 16, 7];

let arr3 = arr2.filter(value => value != 8);


