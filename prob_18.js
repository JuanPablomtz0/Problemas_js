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
    
    let frase = (await input("ingresar frase: "));
    frase = frase.toUpperCase();
    let letra = await input("letra: ");
    letra = letra.toUpperCase();
    let counter =0;
    for(let i = 0;i<frase.length;i++){
        if(frase.charAt(i)==letra)
            counter++;
    }
    console.log(`La letra '${letra}' esta ${counter} veces`);
    process.exit();
}

main();