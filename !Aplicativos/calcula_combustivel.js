const Carro = require('../2. Criando Objetos e Classes em JavaScript/Classes/Carro')
class Viagem {
  percurso;
  distanciaEmKm;
  meioDeTransporte;

  constructor(percurso, distanciaEmKm, meioDeTransporte = 'Carro') {
    if (!percurso || typeof percurso !== 'string') throw new Error('Percurso inválido');
    if (!distanciaEmKm || distanciaEmKm <= 0) throw new Error('Distância inválida');

    this.percurso = percurso;
    this.distanciaEmKm = distanciaEmKm;
    this.meioDeTransporte = meioDeTransporte;
  }

  calculaValorGasto(carro, precoGasolina, aumentoConsumoArCondicionado) {
    const valorBase = carro.calculaValorGastoDoPercurso(this.distanciaEmKm, precoGasolina)
    return aumentoConsumoArCondicionado
      ? valorBase * (1 + aumentoConsumoArCondicionado)
      : valorBase
  }

  imprimeValorDaViagem(carro, precoGasolina, aumentoConsumoArCondicionado) {
    const valorGasto = this.calculaValorGasto(carro, precoGasolina, aumentoConsumoArCondicionado)
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    console.log(
      `Valor gasto na viagem ${this.percurso}: ${valorGasto} ${(aumentoConsumoArCondicionado) ? 'com aumento de 10% no consumo pelo ar condicionado' : ''}\n`
    )
  }
}

/**
 * IIFE (Immediately Invoked Function Expression) - Função principal auto-executável
 * Realiza os cálculos de gastos para diferentes trajetos
 */
(function () {
  // Definição das constantes
  const PRECO_GASOLINA = 6.30 // Preço por litro da gasolina
  const AUMENTO_AR_CONDICIONADO = 0.1 // Aumento de 10% no consumo com ar condicionado

  // Instância do veículo
  const classic = new Carro('Chevrolet Classic LS 1.0 2013', 'Grafite', 10, 'Flex')

  // Instâncias das viagens
  const maceio_LagoaAzeda = new Viagem('Maceió - Lagoa Azeda', 57)
  const pauloAfonso_Palmeira_Maceio = new Viagem('Paulo Afonso - Palmeira dos Índios - Maceió', 340)
  const pauloAfonso_Olivenca_Maceio = new Viagem('Paulo Afonso - Olivenca - Maceió', 357)

  // Cálculos e impressão dos resultados
  // Para cada trajeto, calcula o valor com e sem ar condicionado
  maceio_LagoaAzeda.imprimeValorDaViagem(classic, PRECO_GASOLINA)
  maceio_LagoaAzeda.imprimeValorDaViagem(classic, PRECO_GASOLINA, AUMENTO_AR_CONDICIONADO)

  pauloAfonso_Palmeira_Maceio.imprimeValorDaViagem(classic, PRECO_GASOLINA)
  pauloAfonso_Palmeira_Maceio.imprimeValorDaViagem(classic, PRECO_GASOLINA, AUMENTO_AR_CONDICIONADO)

  pauloAfonso_Olivenca_Maceio.imprimeValorDaViagem(classic, PRECO_GASOLINA)
  pauloAfonso_Olivenca_Maceio.imprimeValorDaViagem(classic, PRECO_GASOLINA, AUMENTO_AR_CONDICIONADO)
})();
