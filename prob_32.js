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
    let list = [];
    
    for(let i=0;i<20;i++){
        let person = await input("ingresar nombre: ");
        list.push(person);
    }
    for(let i=0;i<20;i++){
        console.log("persona " + (i+1) + ": " + list[i]);
    }
    process.exit();
}

main();