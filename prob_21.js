function pares(){
    let total = 0;
    for(let i=1;i<1001;i+=2){
        total+=i
    }
    return total;
}
function impares(){
    let total = 0;
    for(let i=2;i<1001;i+=2){
        total+=i
    }
    return total;
}

console.log(`Suma Pares: ${pares()}`);
console.log(`Suma Pares: ${impares()}`);