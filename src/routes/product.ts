import { Router } from 'express'
import { prisma } from '../prisma'

const product = Router()
product.get('/all', async (req, res) => {
    try {
        const products = await prisma.product.findMany()
        res.send(products)

    } catch (err) {
        res.status(500).send(`erro ${err}`)
    }
})
product.post('/create', async (req, res) => {
    try {
       
        const { name, price } = req.body
    console.log(req.body)
        if(!name ||!price){
            throw "price e name no ecziste"
        }
    
        const user = await prisma.product.create({
            data: {
                name, price
            },
        });
        res.send(`produto ${name} criado!`)
    } catch (err) {
        res.status(500).send(`erro ${err}`)
    }
})
product.delete('/delete', async (req, res) => {

    try {
        const productOne = await prisma.product.findFirst({
            where: {
                id: req.body.id
            }
        })
        await prisma.product.delete({
            where: {
                id: productOne?.id
            }
        })
        res.send('produto deletado!')

    } catch (err) {
        res.status(500).send(`erro ${err}`)
    }


})

export default product