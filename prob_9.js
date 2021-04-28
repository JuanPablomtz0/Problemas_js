const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingresar numero: ",(key)=>{
    if(Number(key)>=0)
        console.log(`${key} es positivo`);
    else
        console.log(`${key} es negativo`);
    rl.close();
})