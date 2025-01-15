let random= Math.random();
let a = prompt(" Enter first operand")
let c = prompt("Enter operator")
let b = prompt(" Enter second operand")


let obj = {
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"*"

}

// does faulty calculations
if(random<0.1){
switch(c){
case("+"): console.log("-");
break;
case("-"): console.log("/");
break;
case("*"): console.log("+");
break;
case("/"): console.log("*");
break;
}}
console.log(`${a} ${c} ${b}`)
alert(`${eval(`${a} ${c} ${b}`)}`);

// does correct calculations
 if(random>0.1){
console.log(`${a} ${c} ${b}`)
     alert(`${eval(`${a} ${c} ${b}`)}`);
 }
// else{
//     c= obj[c]
//     console.log(`${a} ${c} ${b}`)
//     alert(`${eval(`${a} ${c} ${b}`)}`);
// }