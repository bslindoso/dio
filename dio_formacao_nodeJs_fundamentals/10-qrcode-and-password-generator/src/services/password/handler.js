import permittedCharacters from "./utils/permitted-characters.js"

async function handler() {
  let characteres = []
  let password = ""
  const passwordLength = process.env.PASSWORD_LENGTH
  characteres = await permittedCharacters()

  if (process.env.UPPERCASE_LETTERS === "true") characteres.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  if (process.env.LOWERCASE_LETTERS === "true") characteres.push(... "abcdefghijklmnopqrstuvwxyz")
  if (process.env.NUMBERS === "true") characteres.push(... "0123456789")
  if (process.env.SPECIAL_CHARACTERS === "true") characteres.push(... "\"'!@#$%¨&*()_-+=[{]}^~;:/?\\|")

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characteres.length)
    password += characteres[index]
  }

  return password
}

export default handler