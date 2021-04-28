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
    if(num_1<=num_2){
        let counter_par = 0;
        let total_par = 0;
        for(let i= num_1;i<=num_2;i++){
            if(i%2==0){
                counter_par++;
                total_par+=i;
                console.log(i);
            }
        }
        console.log(`cantidad de pares: ${counter_par}`);
        console.log(`total de pares: ${total_par}`);
    }
    else
        console.log("Ingresar numeros correctos");
    process.exit();
}

main();