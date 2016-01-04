"use strict";
var counter;
var item;


for(counter=0; counter<=100; counter++){
console.log(counter)

if (counter % 3 === 0){
console.log("fizz") 
if (counter % 5 === 0){
console.log("buzz")
if (counter % 15 === 0){
console.log("fizzbuzz")
}
}
}
}