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
    console.log("1)sumer (a + b)\n2)resta(a - b)\n3)multi(a * b)\n4)divi(a / b)");
    let op = Number(await input("ingresar op: "));
    let num_1 = Number(await input("ingresar numero a: "));
    let num_2 = Number(await input("ingresar numero b: "));
    switch(op){
        case 1:
            console.log(num_1 + num_2);
            break;
        case 2:
            console.log(num_1 - num_2);
            break;
        case 3:
            console.log(num_1 * num_2);
            break;
        case 4:
            console.log(num_1 / num_2);
            break;

    }

    process.exit();
}

main();