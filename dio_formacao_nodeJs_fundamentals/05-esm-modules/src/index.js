// import connectToDatabase from "./utils/database.mjs";
// connectToDatabase('meu-banco')
// ==========================================================

// import * as database from "./utils/database.mjs"
// database.connectToDatabase('meu-banco')
// database.disconnectDatabase()
// ==========================================================

import { connectToDatabase, disconnectDatabase, databaseType } from "./utils/database.mjs"

connectToDatabase('meu-banco')
disconnectDatabase()
console.log(databaseType)