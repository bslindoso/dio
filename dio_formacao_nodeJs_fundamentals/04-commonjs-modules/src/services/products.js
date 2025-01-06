// todas as funções que lidam com produto
const productType = {
  version: "digital"
}

async function getFullName(codeId, productName) {
  console.log(`product: ${codeId} -- ${productName}`)
}

async function getProductLabel(productName) {
  console.log(`product label: ${productName}`)
}

// hidden function
async function doBreakLine() {
  console.log('\n')
}

module.exports = { getFullName, getProductLabel, productType }