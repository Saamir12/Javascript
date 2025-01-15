let random= Math.random();
let a = prompt("Please enter first operand")
let c = prompt("Enter operator")
let b = prompt("Please enter second operand")


let obj = {
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"*"

}

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


 if(random>0.1){
console.log(`${a} ${c} ${b}`)
     alert(`${eval(`${a} ${c} ${b}`)}`);
 }
// else{
//     c= obj[c]
//     console.log(`${a} ${c} ${b}`)
//     alert(`${eval(`${a} ${c} ${b}`)}`);
// }