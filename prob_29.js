let count = 0;
for(let i = 0; i < 100; i++){
    let dice_1 = Math.floor(Math.random()*5) + 1;
    let dice_2 = Math.floor(Math.random()*5) + 1;
    if((dice_1 + dice_2) == 10){
        count++;
    }
}
console.log(`Se sumaron a 10 los dados ${count} veces`);