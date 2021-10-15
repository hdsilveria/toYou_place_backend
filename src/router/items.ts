import { Router } from 'express'
require('../mongodb/conect')
import products from '../controllers/products'

const router = Router()

router.get('/', products.index)
router.post('/', products.create)
router.delete('/:id', products.delete)


export default router;