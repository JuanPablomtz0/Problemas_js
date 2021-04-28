let matiz = [];
for(let i=0;i<4;i++){
    let placeholder = [];
    for(let j=0;j<5;j++){
        placeholder.push(Math.floor(Math.random()*100));
    }
    matiz.push(placeholder);
}

for(let i=0;i<5;i++){
    for(let j=0;j<4;j++){
        process.stdout.write(matiz[j][i] + " ")
    }
    process.stdout.write("\n")
}