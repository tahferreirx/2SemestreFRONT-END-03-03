const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a temperatura atual (em °C): ', (t) => {
    
    let temperatura = Number(t);
    
    if (temperatura <= 15) {
        console.log("A temperatura " + temperatura + "°C é classificada como frio");
    } else if (temperatura <= 30) {
        console.log("A temperatura " + temperatura + "°C é classificada como agradável");
    } else {
        console.log("A temperatura " + temperatura + "°C é classificada como quente");
    }
    rl.close();

});