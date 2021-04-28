const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(pregunta){
    return new Promise((resolve, reject) => {
        rl.question(pregunta, resolve);
    });
}

function fac(num){
    if(num<=1)
        return 1;
    return num * fac(num-1);
}

async function main(){
    let num = Number((await input("ingresar numero: ")));
    console.log(`Facotrial de ${num} es ${fac(num)}`);
    process.exit();
}

main();