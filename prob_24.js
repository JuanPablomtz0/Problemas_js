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

function prime(num){
    is_prime = true;
    for(let i = 2; i<(num/2);i++){
        if(num%i==0){
            is_prime = false;
            break;
        }
    }
    return is_prime;
}

async function main(){
    
    let num = await input("ingresar numero: ");
    if(prime(num))
        console.log(`${num} es primo`);
    else
        console.log(`${num} no es primo`);
    process.exit();
}

main();