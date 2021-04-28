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
    let list = [
        ["algebra"],
        ["cultura"],
        ["ingles"],
        ["calculo"],
        ["programacion"],
        ["tymi"],
        ["algorithmos"],
        ["poo"],
        ["fisica"],
        ["estructuras"]
    ];
    let prm = 0;
    for(let i=0;i<10;i++){
        let grade = Number(await input("calificacion de " + list[i][0] + ": "));
        list[i].push(grade);
    }
    for(let i=0;i<10;i++){
        prm += list[i][1];
    }
    console.log("promedio: " + prm/10);
    process.exit();
}

main();