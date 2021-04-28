const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("ingresar numero: ",(num)=>{
    for(let i = 1; i <= num; i++){
        console.log(i);
    }
    rl.close();
})
