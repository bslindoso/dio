/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preco do gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const yargs = require('yargs')
const argv = yargs
    .option('etanol', {
        alias: 'e',
        describe: 'Define o tipo do combustível que o seu veículo utiliza como etanol.',
        default: false,
        type: 'boolean',
        demandOption: false
    })
    .option('gasolina', {
        alias: 'g',
        describe: 'Define o tipo do combustível que o seu veículo utiliza como gasolina.',
        default: false,
        type: 'boolean',
        demandOption: false
    })
    .option('flex', {
        alias: 'f',
        describe: 'Define o tipo do combustível que o seu veículo utiliza como flex.',
        default: false,
        type: 'boolean',
        demandOption: false
    })
    .option('rendimento', {
        alias: 'r',
        describe: 'Rendimento do veículo em KM/L',
        type: 'number',
        demandOption: true
    })
    .option('distancia', {
        alias: 'd',
        describe: 'Distância em KM',
        type: 'number',
        demandOption: true
    })
    .argv

if ((!argv.etanol && !argv.gasolina && !argv.flex)) {
    yargs.showHelp()
    console.log('\nSelecione pelo menos um tipo de combustível')
    process.exit()
}

const precoEtanol = 3.965
const precoGasolina = 6.130
const rendimentoVeiculo = argv.rendimento // 10 KM/L
const distancia = argv.distancia // 329 KM

let preco
if (argv.flex) {
    preco = precoGasolina
} else if (argv.gasolina && argv.etanol) {
    tipoDoCombustivelDoVeiculo = 'flex'
} else if (argv.etanol && !argv.gasolina) {
    preco = precoEtanol
} else {
    preco = precoGasolina
}

const valorGasto = ((distancia / rendimentoVeiculo) * preco).toFixed(2)

console.log(`Valor gasto: R$ ${valorGasto.replace('.', ',')}`)