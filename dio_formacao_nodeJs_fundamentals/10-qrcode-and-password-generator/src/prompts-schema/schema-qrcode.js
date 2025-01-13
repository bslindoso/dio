import chalk from "chalk"
import { weniHex } from "../color-conts.mjs"

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.hex(weniHex)(`Digite o link para gerar o QR Code`),
  },
  {
    name: "type",
    description: chalk.hex(weniHex)(`\n(1) Imagem\n(2) Terminal`),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true
  }
]

export default promptSchemaQRCode