const Carro = require('../2. Criando Objetos e Classes em JavaScript/Classes/Carro')

class Viagem {
  percurso;
  distanciaEmKm;
  meioDeTransporte;

  constructor(percurso, distanciaEmKm, meioDeTransporte = 'Carro') {
    this.percurso = percurso;
    this.distanciaEmKm = distanciaEmKm;
    this.meioDeTransporte = meioDeTransporte;
  }

  imprimeValorDaViagem(carro, precoGasolina, aumentoConsumoArCondicionado) {
    const valorGasto = (
      (!aumentoConsumoArCondicionado)
        ? carro.calculaValorGastoDoPercurso(this.distanciaEmKm, precoGasolina)
        : carro.calculaValorGastoDoPercurso(this.distanciaEmKm, precoGasolina) * (1 + aumentoConsumoArCondicionado)
    ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    console.log(
      `Valor gasto na viagem ${this.percurso}: ${valorGasto} ${(aumentoConsumoArCondicionado) ? 'com aumento de 10% no consumo pelo ar condicionado' : ''}\n`
    )
  }
}


(function () {
  const precoGasolina = 6.30
  const aumentoConsumoArCondicionado = 0.1 // aumento de 10% no consumo total pelo ar condicionado
  const classic = new Carro('Chevrolet Classic LS 1.0 2013', 'Grafite', 10, 'Flex')
  const maceio_LagoaAzeda = new Viagem('Maceió - Lagoa Azeda', 57)
  const pauloAfonso_Palmeira_Maceio = new Viagem('Paulo Afonso - Palmeira dos Índios - Maceió', 340)
  const pauloAfonso_Olivenca_Maceio = new Viagem('Paulo Afonso - Olivenca - Maceió', 357)

  maceio_LagoaAzeda.imprimeValorDaViagem(classic, precoGasolina)
  maceio_LagoaAzeda.imprimeValorDaViagem(classic, precoGasolina, aumentoConsumoArCondicionado)

  pauloAfonso_Palmeira_Maceio.imprimeValorDaViagem(classic, precoGasolina)
  pauloAfonso_Palmeira_Maceio.imprimeValorDaViagem(classic, precoGasolina, aumentoConsumoArCondicionado)

  pauloAfonso_Olivenca_Maceio.imprimeValorDaViagem(classic, precoGasolina)
  pauloAfonso_Olivenca_Maceio.imprimeValorDaViagem(classic, precoGasolina, aumentoConsumoArCondicionado)

})();

