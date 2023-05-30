import express from 'express'
import product from './routes/product'

const app = express()
const port = 3333

app.use(express.json())

app.use('/product', product)
app.listen(port, () => {
    console.log(`api rodando na porta ${port}`)
})