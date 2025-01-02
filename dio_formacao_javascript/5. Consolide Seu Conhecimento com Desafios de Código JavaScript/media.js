
/**
 * @fileoverview Programa para avaliação de média escolar
 * @requires ../apps/utils
 * 
 * @description
 * Este programa realiza:
 * - Classificação do aluno baseado na média:
 *   - Média >= 7: Aprovado
 *   - 5 <= Média < 7: Recuperação
 *   - Média < 5: Reprovado
 * 
 */

const { gets, print } = require('../apps/utils')

const media = gets('float', 10)
const aluno = gets('name')
print(`Média do(a) aluno(a) ${aluno}`, media)

if (media >= 7) {
  print('Aprovado')
} else if (media < 7 && media >= 5) {
  print('Recuperação')
} else if (media < 5) {
  print('Reprovado')
}