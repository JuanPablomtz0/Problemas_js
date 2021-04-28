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
    
    let num = Number(await input("ingresar numero: "));
    for(let i =0;i<11;i++){
        let mult = num*i;
        console.log(`${mult}`);
    }
    process.exit();
}

main();