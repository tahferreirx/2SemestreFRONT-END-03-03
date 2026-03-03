const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe um dia da semana: ', (semana) => {

    let diaSemana = Number(semana);

    if (diaSemana == "Sábado" || diaSemana == "Domingo" ) {
        console.log('É fim de semana');
    } else {
        console.log('Não é fim de semana');
    }

    rl.close();

});