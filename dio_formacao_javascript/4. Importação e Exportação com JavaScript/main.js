const { gets, print } = require('./funcoes_auxiliares')

// Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
// Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.
// Dados de entrada:
// 5
// 50
// 10
// 98
// 23
// Saída:
// 98

class Aluno {
  nome;
  numeroSorteado;

  constructor(nome) {
    if (!nome) throw new Error('Informe o nome do aluno');
    this.nome = nome;
    this.numeroSorteado = parseInt(Math.random() * 100);
  }
}

const alunos = [
  new Aluno('João'),
  new Aluno('Maria'),
  new Aluno('José'),
  new Aluno('Pedro'),
  new Aluno('Ana'),
]

let maiorNumeroSorteado = 0;

alunos.forEach((aluno) => {
  print(aluno.nome, aluno.numeroSorteado);
  if (aluno.numeroSorteado > maiorNumeroSorteado) {
    maiorNumeroSorteado = aluno.numeroSorteado;
  }
});

console.log('---------------------------------');
print('Maior número sorteado', maiorNumeroSorteado);

// Outra forma de resolver

// const maiorNumeroSorteado = alunos.reduce((maiorNumeroSorteado, aluno) => {
//   if (aluno.numeroSorteado > maiorNumeroSorteado) {
//     return aluno.numeroSorteado;
//   }
//   return maiorNumeroSorteado;
// }, 0);