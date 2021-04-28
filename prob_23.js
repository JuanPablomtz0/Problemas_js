function pares(){
    let counter = 0;
    for(let i=1;i<11;i++){
        let string = ""
        for(let j=0;j<11;j++){
            counter++;
            string = `${string} ${counter}`;
        }
        console.log(string);
    }

}

pares();