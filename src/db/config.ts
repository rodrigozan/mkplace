/**
 * Modules
*/

import mongoose from "mongoose";
import * as dotenv from "dotenv"

/**
 * Variables
*/

dotenv.config()

const DB_URL = process.env.MONGO_DB_URL;
const DB_PORT = process.env.MONGO_DB_PORT;
const DB_NAME = process.env.MONGO_DB_NAME;

const DB_URI = `${DB_URL}:${DB_PORT}/${DB_NAME}`

mongoose.connect(DB_URI)
.then(() => console.log(`API connected in MONGO DB in ${DB_URI}`))
.catch((error) => console.error(`Error in connection: ${error}`))

const db = mongoose.connection;

export default db;

