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
    
    let num_1 = Number(await input("ingresar numero: "));
    let num_2 = Number(await input("ingresar numero: "));
    if(num_1>num_2){
        let p = num_1;
        num_1 = num_2;
        num_2 = p;
    }
    let counter = 0;
    let counter_par = 0;
    let total_impar = 0;
    for(let i= num_1;i<=num_2;i++){
        counter++;
        if(i%2==0)
            counter_par++;
        else
            total_impar+=i;
        console.log(i);
    }
    console.log(`cantidad de numeros: ${counter}`);
    console.log(`cantidad de pares: ${counter_par}`);
    console.log(`total de impares: ${total_impar}`);
    process.exit();
}

main();