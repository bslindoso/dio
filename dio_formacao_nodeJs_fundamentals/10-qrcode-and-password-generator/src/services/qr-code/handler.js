import chalk from "chalk"
import qr from "qrcode"

async function handler(err, result) {
  if (err) {
    console.log(`error on application: ${err}`)
    return
  }

  const isSmall = result.type == 2;
  try {
    if (isSmall) {
      // Gera o QR code no terminal
      qr.toString(result.link, { type: "terminal", small: isSmall }, (err, qrcode) => {
        if (err) throw err
        console.log(qrcode)
        console.log(chalk.green("\n✅ QR CODE gerado com sucesso no terminal.\n"))
      })
    } else {
      // Salva o QR code como imagem PNG
      // Gera um nome único para o arquivo (usando timestamp)
      const timestamp = new Date().toISOString().replace(/[:.-]/g, "") // Remove caracteres problemáticos
      const outputPath = `./qrcodes-saved/qrcode_${timestamp}.png`

      await qr.toFile(outputPath, result.link)

      console.log(chalk.green(`✅ QR CODE salvo com sucesso em: ${outputPath}\n`))
    }

  } catch (error) {
    console.error(`Erro ao gerar ou salvar o QR code: ${error}`)
  }

}

export default handler