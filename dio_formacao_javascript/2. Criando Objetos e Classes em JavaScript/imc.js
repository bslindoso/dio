/* 
Fórmula do IMC: IMC = peso / (altura * altura)
*/

(function () {
    const Pessoa = require('./Classes/Pessoa')    
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

    const pessoa = new Pessoa(argv.peso, argv.altura)

    console.log(pessoa.imprimeResultadoImc())

})();