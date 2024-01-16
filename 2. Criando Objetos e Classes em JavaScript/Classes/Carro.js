class Carro {
    marca;
    cor;
    gastoMedioCombustivel;
    tipoDeCombustivel;

    constructor(marca='', cor='', gastoMedioCombustivel, tipoDeCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
        this.tipoDeCombustivel = tipoDeCombustivel
    }

    calculaValorGastoDoPercurso(distanciaPercorrida, precoCombustivel) {
        return ((distanciaPercorrida / this.gastoMedioCombustivel) * precoCombustivel)
    }
}

module.exports = Carro