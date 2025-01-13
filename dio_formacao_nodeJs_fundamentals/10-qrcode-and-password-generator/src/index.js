import prompt from "prompt"
import promptSchemaMain from "./prompts-schema/schema-main.js"
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import chalk from "chalk";
import { orangeHex } from "./color-conts.mjs"
import generateHeader from "../utils/utils.mjs"


(async function main() {

  generateHeader(
    chalk.hex(orangeHex)("ESCOLHA A FERRAMENTA"),
    chalk.hex(orangeHex).bold("\\"),
    21
  )


  prompt.get(promptSchemaMain, async (err, result) => {

    if (err) console.log(err)

    if (result.select == 1) await createQRCode()
    if (result.select == 2) await createPassword()
  })
})();