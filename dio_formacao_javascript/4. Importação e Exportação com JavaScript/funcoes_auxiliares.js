
function gets() {
  return 10
}

function print(referencia, texto) {
  if (!referencia || !texto) throw new Error('Parâmetros inválidos')
  console.log(`${referencia}: ${texto}`)
}

module.exports = { gets, print }