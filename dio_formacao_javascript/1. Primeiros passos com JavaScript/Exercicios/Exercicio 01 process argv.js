/* Faça programa para calcular o valor de viagem.

Você terá 3 variáveis. Sendo elas:

1 - Preço do combustível,
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. 

*/

if (process.argv[2] == '-?' || process.argv[2] == undefined) {
    console.log(`=============== Documentação ===============
Como utilizar:      node '.\\Exercicio 01.js' preco rendimento distancia`)
    process.exit()
}

if (process.argv[2] && process.argv[3] && process.argv[4]) {

    const preco = process.argv[2] // 5.6
    const rendimentoVeiculo = process.argv[3] //10
    const distancia = process.argv[4] // 329

    const valorGasto = ((distancia / rendimentoVeiculo) * preco).toFixed(2)

    console.log(`Valor gasto: R$ ${valorGasto.replace('.', ',')}`)
} else {
    console.log('Informe os preço, rendimento do veículo e distância')
}


