/* Faça programa para calcular o valor de viagem.

Você terá 3 variáveis. Sendo elas:

1 - Preço do combustível,
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. 

*/

const yargs = require('yargs')
const argv = yargs
    .option('preco', {
        alias: 'p',
        describe: 'Preço do conbustível em R$',
        type: 'number',
        demandOption: true
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

const preco = argv.preco // 5.6 R$
const rendimentoVeiculo = argv.rendimento // 10 KM/L
const distancia = argv.distancia // 329 KM


const valorGasto = ((distancia / rendimentoVeiculo) * preco).toFixed(2)

console.log(`Valor gasto: R$ ${valorGasto.replace('.', ',')}`)