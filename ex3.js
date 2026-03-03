const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número que corresponda com um dia da semana (1-7): ', (semana) => {

    let diaSemana = Number(semana);

    if (diaSemana == 1) {
        console.log('Domingo');
    } else if (diaSemana == 2) {
        console.log('Segunda-feira');
    } else if (diaSemana == 3) {
        console.log('Terça-feira');
    } else if (diaSemana == 4) {
        console.log('Quarta-feira');
    } else if (diaSemana == 5) {
        console.log('Quinta-feira');
    } else if (diaSemana == 6) {
        console.log('Sexta-feira');
    } else if (diaSemana == 7) {
        console.log('Sábado');
    } else {
        console.log('Não corresponde a nenhum dia!')
    }

    rl.close();
});