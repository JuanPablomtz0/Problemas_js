const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("ingresar numero: ",(num)=>{
    let count = 0;
    for(let i = 1; i <= num; i++){
        if(i%3==0){
            console.log(`multiplo de 3: ${i}`);
            count++;
        }
    }
    console.log(`Numero de multiplos de 3: ${count}`);
    rl.close();
})