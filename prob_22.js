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
    let espacio = ""
    for(let i = 0;i<5;i++){
        espacio += "     ";
        console.log(`${espacio}${frase}`);
    }
    process.exit();
}

main();