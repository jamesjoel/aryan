let obj = { 
    name : "amar",
    age : 25,
    city : "indore"
}

// let { ...name } = obj;

let name = {...obj};

obj.name = "rohit";

console.log(name)

// let {x : name, y : age, z : city} = obj;



