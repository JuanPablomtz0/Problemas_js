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
    for(let i=0;i<10;i++){
        let grade = Number(await input("calificacion de " + list[i][0] + ": "));
        list[i].push(grade);
    }

    let grade = Number(await input("Nota a buscar: "));
    let found = false;
    for(let i=0;i<10;i++){
        if(list[i][1]==grade){
            found = true;
        }
    }
    if(found)
        console.log("si esta " + grade);
    else
        console.log("no esta " + grade);
    process.exit();
}

main();