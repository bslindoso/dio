(function () {
    const Carro = require('./Classes/Carro')
    const argv = defineYargs()

    const tipoDeCombustivel = defineTipoDeCombustivel(argv.gasolina, argv.etanol, argv.flex)
    const carro = new Carro(argv.marca, argv.cor, argv.gastoMedioCombustivel, tipoDeCombustivel)

    console.log(carro)
    console.log(`O valor gasto do percurso de ${argv.distancia.toFixed(1)} km é de R$ ${carro.calculaValorGastoDoPercurso(argv.distancia, argv.preco).toFixed(2).replace('.', ',')}`)
    console.log(`Preço do(a) ${carro.tipoDeCombustivel == 'Flex' ? 'Gasolina' : carro.tipoDeCombustivel}: R$ ${argv.preco.toFixed(2).replace('.', ',')}`)

})();

function defineTipoDeCombustivel(gasolina, etanol, flex) {
    if (flex) {
        return 'Flex'
    } else if (gasolina && etanol) {
        return 'Flex'
    } else if (etanol && !gasolina) {
        return 'Etanol'
    } else {
        return 'Gasolina'
    }
}

function defineYargs() {
    const yargs = require('yargs')
    const argv = yargs
        .option('preco', {
            alias: 'p',
            describe: 'Preço do combustível em R$',
            type: 'number',
            demandOption: true
        })
        .option('gastoMedioCombustivel', {
            alias: 'r',
            describe: 'Gasto médio de combustível do seu veículo em KM/L',
            type: 'number',
            demandOption: true
        })
        .option('distancia', {
            alias: 'd',
            describe: 'Distância a ser percorrida em KM',
            type: 'number',
            demandOption: true
        })
        .option('marca', {
            alias: 'm',
            describe: 'Marca do veículo',
            type: 'string',
            demandOption: false
        })
        .option('cor', {
            alias: 'c',
            describe: 'Cor do veículo',
            type: 'string',
            demandOption: false
        })
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
        .argv

    if ((!argv.etanol && !argv.gasolina && !argv.flex)) {
        yargs.showHelp()
        console.log('\nSelecione pelo menos um tipo de combustível')
        process.exit()
    }

    return argv
}