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
    let key = "";
    while(key != "S" && key != "N"){
        key = await input("input N or S: ");
    }
    console.log(`Found ${key}`);
    process.exit();
}

main();