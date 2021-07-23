let a = [10];
let b = [10];
let parity = [10];
for (let i = 0; i < 10; i++) {
    a[i] = i;       
    b[i] = i;        
    parity[i] = a[i] ^ b[i];

}
for (let i = 0; i < 10; i++) {
    b[i] = 0;
    console.log(b[i]); 
}

for (let i = 0; i < 10; i++) {
    b[i] = a[i] ^ parity[i];
    console.log(b[i]);
}