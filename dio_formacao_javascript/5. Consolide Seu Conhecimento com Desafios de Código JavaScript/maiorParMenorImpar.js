const { gets, print, not } = require('../apps/utils')

const lista = gets('intlist', 10)
print('================ NÚMEROS ===============')
print(lista)

let maior_par = lista.filter(n => isPar(n))[0]
let menor_impar = lista.filter(n => not(isPar(n)))[0]

lista.forEach(n => {
  if (maior_par < n && isPar(n)) maior_par = n
  if (menor_impar > n && not(isPar(n))) menor_impar = n
});

function isPar(n) {
  return n % 2 === 0
}

print('=============== NÚMEROS PARES ===============')
print('Maior par', maior_par)
print('=============== NÚMEROS ÍMPARES ===============')
print('Menor ímpar', menor_impar)