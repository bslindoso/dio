class Pessoa {
    peso;
    altura;
    imc;

    constructor(peso, altura) {
        this.peso = peso
        this.altura = altura
        // this.imc = this.peso / (this.altura * this.altura)
        this.imc = this.peso / (Math.pow(this.altura, 2))
    }

    imprimeResultadoImc() {
        if (this.imc < 18.8) {
            return `IMC: ${this.imc} - Abaixo do peso`
        } else if (this.imc >= 18.5 && this.imc < 25) {
            return `IMC: ${this.imc} - Peso normal`
        } else if (this.imc >= 25 && this.imc < 30) {
            return `IMC: ${this.imc} - Acima do peso`
        } else if (this.imc >= 30 && this.imc < 40) {
            return `IMC: ${this.imc} - Obeso`
        } else {
            return `IMC: ${this.imc} - Obesidade grave`
        }
    }
}

module.exports = Pessoa