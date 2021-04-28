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
    let list = [];
    counter = 1;
    let p = Number(await input("ingresar p: "));
    let m = Number(await input("ingresar f: "));
    let n = Number(await input("ingresar c: "));
    for(let h=0;h<p;h++){
        let holder = [];
        for(let i=0;i<m;i++){
            let placeholder = [];
            for(let j=0;j<n;j++){
                placeholder.push(counter);
                counter++;
            }
            holder.push(placeholder);
        }
        list.push(holder);
    }
    console.log(list);

    process.exit();
}

main();