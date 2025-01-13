import chalk from "chalk"
import { weniHex, pinkHex } from "../color-conts.mjs"

const descriptionContent = chalk.hex(weniHex).bold(`\n(1) QRCODE GENERATOR\n`)
  + chalk.hex(pinkHex).bold(`(2) PASSWORD GENERATOR`)
const promptSchemaMain = [
  {
    name: "select",
    description: descriptionContent,
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    require: true,
  }
]

export default promptSchemaMain