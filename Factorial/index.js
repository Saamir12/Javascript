let a= 7; 
let b = 5;
function factorial(number){
    let arr= Array.from(Array(number+1).keys())

    console.log(arr.slice(1,))
   let c=  arr.slice(1,).reduce((a, b)=> a*b
)
console.log(c)
}
function facFor(number){
    let fac =1;
    for (let index = 1; index < number; index++) {
        fac= fac*index;
    }
    return fac
}

console.log(factorial(a))
console.log(facFor(b))