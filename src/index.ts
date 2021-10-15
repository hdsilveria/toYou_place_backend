import express from 'express'
import items from './router/items'

const app = express()

app.use(express.json())

app.use('/items', items)

app.listen(8080, () => {
  console.log("Aplicação rodando na porta 8080")
})