/* 
Fórmula do IMC: IMC = peso / (altura * altura)
*/

function calculaImc(peso, altura) {
    return peso / (altura * altura)
}

function imprimeResultado(imc) {
    if (imc < 18.8) {
        return `IMC: ${imc} - Abaixo do peso`
    } else if (imc >= 18.5 && imc < 25) {
        return `IMC: ${imc} - Peso normal`
    } else if (imc >= 25 && imc < 30) {
        return `IMC: ${imc} - Acima do peso`
    } else if (imc >= 30 && imc < 40) {
        return `IMC: ${imc} - Obeso`
    } else {
        return `IMC: ${imc} - Obesidade grave`
    }
}

(function () {
    const yargs = require('yargs')

    const argv = yargs
        .option('peso', {
            alias: 'p',
            describe: 'Peso em Kg',
            demandOption: true
        })
        .option('altura', {
            alias: 'a',
            describe: 'Altura em metros',
            type: 'number',
            demandOption: true
        })
        .argv

    const imc = calculaImc(argv.peso, argv.altura)

    console.log(imprimeResultado(imc))

})();