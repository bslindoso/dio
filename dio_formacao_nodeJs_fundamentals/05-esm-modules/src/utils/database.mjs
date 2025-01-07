// async function connectToDatabase(dataName) {
//   console.log(`concetando com o banco ${dataName}`)
// }

// export default connectToDatabase;
// ==========================================================

// const databaseType = {
//   userType: "admin",
//   dataType: "datalocal"
// }

// async function connectToDatabase(dataName) {
//   console.log(`concetando com o banco ${dataName}`)
// }

// async function disconnectDatabase() {
//   console.log(`desconectando ao banco de dados`)
// }

// export {
//   connectToDatabase,
//   disconnectDatabase,
//   databaseType
// }
// ==========================================================

export const databaseType = {
  userType: "admin",
  dataType: "datalocal"
}

export const connectToDatabase = async (dataName) => {
  console.log(`concetando com o banco ${dataName}`)
}

export const disconnectDatabase = () => {
  console.log(`desconectando ao banco de dados`)
}
