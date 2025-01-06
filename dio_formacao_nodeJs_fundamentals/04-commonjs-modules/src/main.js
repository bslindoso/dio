// const product = require('./services/products')
const { getFullName, productType } = require('./services/products')
const config = require("./services/config")
const db = require("./services/database")

async function main() {
  console.log("carrinho compras:")
  // await product.getFullName(408, "mousepad")
  // await product.getFullName(508, "mouse")
  // await product.getProductLabel("pendrive")
  // console.log(product.productType)
  await getFullName(1, "teclado")
  await getFullName(257, "placa de vídeo")
  console.log(productType)

  console.log(config)

  await db.connectToDatabase("db-sql")
  await db.disconnectDatabase()


}

main();