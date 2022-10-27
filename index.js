import  express from 'express'
import dotenv from 'dotenv'
import accountRouter from './connect.js'

dotenv.config()

const expressApp = express()

expressApp.use(express.json())
expressApp.use(express.text())

expressApp.get('/', (req, res) => {
    res.send('Connected');
})

expressApp.use("/account", accountRouter)

expressApp.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor levantado en el ${3000}`)
})
