const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingresar numero: ",(key)=>{
    if(Number(key)%2==0)
        console.log(`${key} es par`);
    else
        console.log(`${key} es impar`);
    rl.close();
})