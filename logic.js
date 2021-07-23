let a = 5;       
let b = 3;        
let parity = a ^ b;
b = 0;
console.log(b); 

b = a ^ parity;
console.log(b);