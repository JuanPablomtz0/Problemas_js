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



async function main(){
    
    let frase = await input("ingresar frase: ");
    frase = frase.padStart(15);
    frase = frase.padEnd(15);
    console.log(`${frase}`);
    process.exit();
}

main();