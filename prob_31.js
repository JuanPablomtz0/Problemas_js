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

function fac(num){
    if(num<=1)
        return 1;
    return num * fac(num-1);
}

async function main(){
    let num = Number(await input("ingresar numero: "));
    console.log("1)Revisar primo\n2)Factorial\n3)Tabla");
    let op = Number(await input("ingresar op: "));
    switch(op){
        case 1:
            console.log(prime(num));
            break;
        case 2:
            console.log(fac(num));
            break;
        case 3:
            for(let i=0;i<11;i++){

                console.log(`${i*num}`);
            }
            break;

    }
    process.exit();
}

main();