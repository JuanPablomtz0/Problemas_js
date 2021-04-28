let matiz = [];
for(let i=0;i<4;i++){
    let placeholder = [];
    for(let j=0;j<5;j++){
        placeholder.push(Math.floor(Math.random()*100));
    }
    matiz.push(placeholder);
}
for(let i=0;i<4;i++){
    for(let j=0;j<5;j++){
        process.stdout.write(matiz[i][j] + " ")
    }
    process.stdout.write("\n")
}