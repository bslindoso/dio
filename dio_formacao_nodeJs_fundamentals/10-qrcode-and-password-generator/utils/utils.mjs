
/**
 * @fileoverview Utility functions for generating random data and formatted printing
 * 
 * @constant {string[]} NAMES - Array of 30 common Brazilian names alternating between male and female
 */
const NAMES = [
  'João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Julia', 'Lucas', 'Beatriz',
  'Miguel', 'Sofia', 'Gabriel', 'Laura', 'Rafael', 'Isabella', 'Daniel',
  'Manuela', 'Bruno', 'Valentina', 'Felipe', 'Helena', 'Thiago', 'Alice',
  'Eduardo', 'Clara', 'Gustavo', 'Sophia', 'Leonardo', 'Luiza', 'Arthur', 'Mariana'
]

/**
 * Generates random Lorem Ipsum text
 * @param {number} [paragraphs=1] - Number of paragraphs to generate
 * @returns {string} Generated Lorem Ipsum text
 */
function generateLoremIpsum(paragraphs = 1) {
  const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']
  let text = ''
  for (let i = 0; i < paragraphs; i++) {
    const sentences = Math.floor(Math.random() * 5) + 3
    for (let j = 0; j < sentences; j++) {
      const wordsInSentence = Math.floor(Math.random() * 8) + 4
      for (let k = 0; k < wordsInSentence; k++) {
        text += words[Math.floor(Math.random() * words.length)] + ' '
      }
      text = text.trim() + '. '
    }
    text = text.trim() + '\n\n'
  }
  return text.trim()
}

/**
 * Generates random data based on specified type
 * @param {string} type - Type of data to generate ('lorem', 'int', 'float', 'name', 'intlist', 'namelist')
 * @param {(number|string)} [range] - Optional range or specification value
 * @returns {(number|string|Array|null)} Generated random data based on type
 * @throws {Error} When range is required but not provided for list types
 * 
 * @example
 * gets('decimal', 10) // Returns random decimal between 0-10
 * gets('nome', 'masculino') // Returns random male name
 * gets('lista numerica', 5) // Returns array with 5 random numbers
 */
function gets(type, range) {
  if (!type) return null

  switch (type.toLowerCase()) {
    case 'lorem':
      return generateLoremIpsum(range || 1)

    case 'int':
      return Math.floor(Math.random() * (range || 100))

    case 'float':
      return Number((Math.random() * (range || 100)).toFixed(2))

    case 'name':
      if (range === 'male') {
        return NAMES.filter((_, i) => i % 2 === 0)[Math.floor(Math.random() * 15)]
      } else if (range === 'female') {
        return NAMES.filter((_, i) => i % 2 !== 0)[Math.floor(Math.random() * 15)]
      }
      return NAMES[Math.floor(Math.random() * NAMES.length)]

    case 'intlist':
      if (!range) throw new Error('Range é obrigatório para listas')
      return Array.from({ length: range }, () => Math.floor(Math.random() * 100))

    case 'namelist':
      if (!range) throw new Error('Range é obrigatório para listas')
      return Array.from({ length: range }, () => NAMES[Math.floor(Math.random() * NAMES.length)])

    default:
      return null
  }
}

/**
 * Prints formatted data to console
 * @param {*} referencia - Main value to print
 * @param {*} [texto] - Optional additional text
 * @throws {Error} When referencia parameter is invalid
 * 
 * @example
 * print('Score', 10) // Outputs: Score: 10
 * print('Hello') // Outputs: Hello
 */
function print(referencia, texto) {
  if (referencia === 0) { } else { if (!referencia) throw new Error('Parâmetros inválidos') }
  if (texto) {
    console.log(`${referencia}: ${texto}`)
  } else {
    console.log(`${referencia}`)
  }
}

/**
 * Negates the given value.
 * @param {*} value - The value to negate.
 * @returns {boolean} The negated value.
 */
function not(value) {
  return !value
}

/**
 * Pauses the program execution and waits for the user to press any key to continue.
 * @returns {Promise<void>} A promise that resolves when the user presses a key.
 */
async function pauseForKeypress() {
  console.log('\nPressione qualquer tecla para continuar...')
  return new Promise(resolve => {
    process.stdin.setRawMode(true)
    process.stdin.once('data', () => {
      process.stdin.setRawMode(false)
      resolve()
    })
  })
}

/**
 * Generates a header with a centered text and a line of the specified character.
 * @param {string} text - The text to be displayed in the header.
 * @param {string} [char='-'] - The character to be used for the line. Defaults to '-'.
 * @param {number} [width=50] - The width of the header. Defaults to 50.
 * @returns {void}
 */
function generateHeader(text, char = '-', width = 50) {
  const line = char.repeat(width)
  const paddedText = text.padStart((width + text.length) / 2).padEnd(width)
  console.log(`\n` + line)
  console.log(paddedText)
  console.log(line)
}

export default generateHeader