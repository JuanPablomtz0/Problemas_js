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
    let counter = 0;
    let key = "";
    while(key != "EXIT"){
        key = await input("Ingresar frase o por \"EXIT\" para terminar:\n");
        counter++;
    }
    counter--;
    console.log(`Frases ${counter}`);
    process.exit();
}

main();