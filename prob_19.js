const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var tiempo = new Date();

function input(pregunta){
    return new Promise((resolve, reject) => {
        rl.question(pregunta, resolve);
    });
}
function update(){
    console.log(`Son las ${tiempo.getHours()} con ${tiempo.getMinutes()} minutos`);
}

async function main(){
    let hora = Number((await input("ingresar hora: ")));
    let minuntos = Number((await input("ingresar minuto: ")));
    tiempo.setHours(hora);
    tiempo.setMinutes(minuntos);
    setInterval(update,60000);//acutualiza casa minuto
    //process.exit();
}



main();