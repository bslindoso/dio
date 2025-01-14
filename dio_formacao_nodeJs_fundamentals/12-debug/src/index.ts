import { getBaseEmail } from "./services/email";

(async function main() {
  console.log(await getBaseEmail("Bruno"))

  console.log("Finalizado")
  console.log("...")
})()