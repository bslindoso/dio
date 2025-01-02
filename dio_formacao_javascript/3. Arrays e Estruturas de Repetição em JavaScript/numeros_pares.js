// crie um programa que tenha uma lista de números como constante e dela imprima apenas os números pares

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

lista.forEach(numero => {
  if (numero % 2 === 0) {
    console.log(numero);
  }
});


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//         console.log(numeros[i]);
//     }
// }
