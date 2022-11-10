/**
 * Modules
*/

import express from "express"
import cors from "cors"
import helmet from "helmet"
import * as dotenv from "dotenv"

import { productRoute } from "./routes/products.routes"

/**
 * Variables
*/

dotenv.config()

if(!process.env.PORT) {
    process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

/**
 * Configuration
*/

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(productRoute)

/**
 * Server
*/

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

/**
 * Export server for tests
*/

export default app