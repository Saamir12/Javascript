let a= 10
function arrayGen(number){
  let arr=  Array.from (Array(number).keys())
  console.log(arr)
}
console.log(arrayGen(a))