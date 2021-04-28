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

function shellSort(arr) {
    var increment = (arr.length) / 2;
    while (increment > 0) {
        for (i = increment; i < (arr.length / arr[0].length); i++) {
            var j = i;
            var temp = arr[i];
            while (j >= increment && arr[j-increment][0] > temp[0]) {
                arr[j] = arr[j-increment];
                j = j - increment;
            }
    
            arr[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
    }
  return arr;
}

async function main(){
    let m = Number(await input("ingresar m: "));
    let list = [];
    let n = Number(await input("ingresar n: "));
    for(let i=0;i<m;i++){
        let placeholder = [];
        for(let j=0;j<n;j++)
        placeholder.push(Number(await input("ingresar " + (i+1) + " " + (j+1) + ": ")));
        list.push(placeholder);
    }
    for(let i=0;i<m;i++){
        console.log(list[i]);
    }
    shellSort(list);
    for(let i=0;i<m;i++){
        console.log(list[i]);
    }
    process.exit();
}

main();