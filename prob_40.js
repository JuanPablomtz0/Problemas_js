const readline = require('readline');

let empresa = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(pregunta){
    return new Promise((resolve, reject) => {
        rl.question(pregunta, resolve);
    });
}

function VENTAS(repre,mes,pro){
    let venta = {
        "representante":repre,
        "mes":mes,
        "producto":pro
    }
    return venta;
}

function TOTAL(mes,producto){
    let total = 0
    total += empresa.forEach(adding);
}

function adding(obj){
    return obj.pro;
}

async function main(){
    
    console.log("EXIT para salir , cualquier otro para continuar");
    let op = await input("op: ");
    while(op!="EXIT"){
        let value1 = await input("representante: ");
        let value2 = await input("mes: ");
        let value3 = Number(await input("producto: "));
        empresa.push(VENTAS(value1,value2,value3));
        console.log("EXIT para salir , cualquier otro para continuar");
        op = await input("op: ");
    }
    console.log(empresa);

    console.log("Total: " + TOTAL("enero",2));
    process.exit();
}

main();



    