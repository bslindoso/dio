// VARIÁVEIS
var a = 'a' // escopo global e pode ser alterada em qualquer lugar do código
let b = 'b' // escopo local e pode ser alterada apenas no escopo onde foi criada
const c = 'c' /* escopo local e não pode ser alterada, 
  mas pode ser alterada se for um objeto com propriedades mutáveis */

// TIPOS
let d: number = 10 // tipagem explícita
let e = 10 // tipagem implícita
let f: string | number = "10" // tipagem múltipla
let g: any = 10 // tipagem any 
g = false // tipagem any permite alterar o tipo da variável
let h: unknown = 10 /* tipagem unknown. A diferença entre unknown e 
  any é que unknown não permite alterar o tipo da variável */

/*  Diferença entre declaração de tipo e asserção de tipo:

1. let valor: string = 'texto'
  - É uma declaração de tipo
  - Define o tipo da variável desde sua criação
  - É a forma mais comum e recomendada para tipagem em TypeScript
    O TypeScript verifica o tipo no momento da atribuição

2. let valor = 'texto' as string
  - É uma asserção de tipo (type assertion)
  - Força um tipo específico em um valor existente
  - É mais útil quando você precisa converter entre tipos compatíveis
  - É especialmente útil quando o TypeScript não consegue inferir corretamente o tipo

Um exemplo prático da diferença:

  // Declaração normal - TypeScript vai dar erro se você tentar atribuir outro tipo
  let nome: string = 'João'

  // Asserção - Útil em situações como APIs onde você sabe mais sobre o tipo que o TypeScript
  const resposta = await api.get('/usuarios') as Usuario[]

A primeira forma (:string) é preferível na maioria dos casos por ser 
mais clara e segura. O as é mais usado em situações específicas 
onde você precisa garantir um tipo específico ou fazer conversões 
entre tipos compatíveis.
*/

// OBJETOS e INTERFACES
const pessoa1 = {
  nome: 2,
  sobrenome: true,
  idade: "30"
}

/* Interfaces servem para definir a estrutura de um objeto e garantir 
  que ele tenha todas as propriedades e tipos necessários */
interface Pessoa {
  nome: string
  sobrenome: string
  idade: number,
  profissao?: string // propriedade opcional
}

const pessoa2: Pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  idade: 30
}

const pessoa3: Pessoa = {
  nome: 'Maria',
  sobrenome: 'Silva',
  idade: 25,
  profissao: 'Desenvolvedora'
}

const arrayPessoas: Pessoa[] = [pessoa2, pessoa3]
const arrayPessoas2: Array<Pessoa> = [pessoa2, pessoa3] // outra forma de declarar array

const arrayNumeros: number[] = [1, 2, 3]
