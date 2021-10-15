import { Schema } from 'mongoose'
import mongoose from 'mongoose'

interface itemInterface {
  item: string
  price: string
  id: string
}

const products = mongoose.model<itemInterface>('products', new Schema({
    item: { type: String, required: true },
    price: { type: Number, required: true },
}, {
  timestamps: true,
}
))


export default products