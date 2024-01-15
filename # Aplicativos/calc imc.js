/* 
Fórmula do IMC:
IMC = peso / (altura * altura)

*/

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
        demandOption: true
    })
    .argv

const imc = argv.peso / (argv.altura * argv.altura)

if (imc < 18.8) {
    console.log(`IMC: ${imc} - Abaixo do peso`)
} else if (imc >= 18.5 && imc < 25) {
    console.log(`IMC: ${imc} - Peso normal`)
} else if (imc >= 25 && imc < 30) {
    console.log(`IMC: ${imc} - Acima do peso`)
} else if(imc >= 30 && imc < 40) {
    console.log(`IMC: ${imc} - Obeso`)
} else {
    console.log(`IMC: ${imc} - Obesidade grave`)
}