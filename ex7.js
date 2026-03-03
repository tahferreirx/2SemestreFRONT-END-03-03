const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o primeiro número: ', (n1) => {
    rl.question('Informe o segundo número: ', (n2) => {

        let numero1 = Number(n1);
        let numero2 = Number(n2);

        if (numero1 > numero2) {
            console.log('O primeiro número é maior!');
        } else if (numero2 > numero1) {
            console.log('O segundo número é maior!')
        } else {
            console.log('Os números são iguais!')
        }
        rl.close();
    });
});