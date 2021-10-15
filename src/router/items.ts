import { Router } from 'express'
import items from '../mongodb/items'
require('../mongodb/conect')

const router = Router()

router.get('/', (req, res) => {
  items.find().then(response => {
    return res.status(200).json(response)
  })
})

router.post('/', (req, res) => {
  items.create(req.body).then(response => {
    return res.status(201).json({
      id: response.id,
      msg: "Produto cadastrado com sucesso!"
      })
  })
})


export default router;