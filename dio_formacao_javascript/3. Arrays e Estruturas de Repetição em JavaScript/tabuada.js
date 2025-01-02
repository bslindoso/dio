// Crie um programa que imprima a tabuada de um número fornecido pelo usuário.
const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número para ver sua tabuada:'));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
