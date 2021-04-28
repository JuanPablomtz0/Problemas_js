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
        [100],
        [101],
        [102],
        [103],
        [104],
        [105],
        [106],
        [107],
        [108],
        [109]
    ];
    for(let i=0;i<10;i++){
        let num = Number(await input("numero de alumnos  del curso " + list[i][0] + ": "));
        list[i].push(num);
    }

    console.log(list);
    process.exit();
}

main();