let total_dos = 0;
let total_tres = 0;
for(let i = 0;i<101;i++){
    if(i%2==0){
        total_dos += i;
        console.log(`multiplo de 2: ${i}`);
    }
    if(i%3==0){
        total_tres += i;
        console.log(`multiplo de 3: ${i}`);
    }
}
console.log(`total multiplo de 2: ${total_dos}`);
console.log(`total multiplo de 3: ${total_tres}`);