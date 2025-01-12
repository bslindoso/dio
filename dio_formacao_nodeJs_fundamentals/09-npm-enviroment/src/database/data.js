import chalk from "chalk"
import ls from "log-symbols"

async function connectToDatabase(user, password) {
  if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
    console.log(ls.success,
      chalk.green('conexão com banco de dados estabelecida'))
  } else {
    console.log(ls.error,
      chalk.red(' falha de login, não foi possível se conectar ao banco de dados'))
  }
}

export default connectToDatabase