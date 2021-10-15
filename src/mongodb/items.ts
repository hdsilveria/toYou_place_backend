import { Schema } from 'mongoose'
import mongoose from 'mongoose'

const products = mongoose.model('products', new Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true }
}))

export default products