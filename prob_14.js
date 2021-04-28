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
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    let key = "";
    for(let i = 0;i<5;i++){
        num = Number(await input("ingresar numero: "));
        if(num > max)
            max=num;
        if(num<min)
            min=num;
    }
    console.log(`MIN: ${min}`);
    console.log(`MAX: ${max}`);
    process.exit();
}

main();