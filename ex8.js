const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o primeiro número: ', (n1) => {
    rl.question('Informe a o segundo número: ', (n2) => {
        rl.question('Informe a operação que deseja (+,-,*,/): ', (operacao) => {
            
            let numero1 = Number(n1);
            let numero2 = Number(n2);

            if (operacao == "+") {
                console.log('Resultado: ' + (numero1 + numero2));
            } else if (operacao == "-") {
                console.log('Resultado: ' + (numero1 - numero2));
            } else if (operacao == "*") {
                console.log('Resultado: ' + (numero1 * numero2));
            } else if (operacao == "/") {
                console.log('Resultado: ' + (numero1 / numero2));
            } else {
                console.log('Inválido');
            }
            rl.close();
        });
    });
});