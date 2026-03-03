const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe a sua idade: ', (i) => {

    let idade = Number(i);

    if (idade >= 18) {
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
    rl.close();
});