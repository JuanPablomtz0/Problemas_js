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

function rome (num) {
	if (!+num)
		return false;
	var	digits = String(+num).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}

async function main(){
    
    let num = Number(await input("ingresar numero: "));
    if(num < 5000)
        console.log(`${rome(num)} en romano`);
    process.exit();
}

main();