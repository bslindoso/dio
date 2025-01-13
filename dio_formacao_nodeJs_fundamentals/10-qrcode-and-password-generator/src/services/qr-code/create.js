import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/schema-qrcode.js";
import handler from "./handler.js";



async function createQRCode() {
  prompt.get(promptSchemaQRCode, handler)
}

export default createQRCode