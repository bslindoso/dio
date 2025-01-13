import chalk from "chalk";
import { orangeHex } from "../../color-conts.mjs";
import handler from "./handler.js";
import clipboard from "clipboardy";

async function createPassword() {
  const password = await handler()
  console.log(chalk.hex(orangeHex)(`\n${password}\n`))
  clipboard.writeSync(password)
  console.log(chalk.green(`✅ Senha gerada com sucesso e copiada para área de transferência!`))
}

export default createPassword