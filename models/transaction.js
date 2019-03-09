const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Float = require('mongoose-float').loadType(mongoose)

const transactionSchema = new Schema({
  name: String,
  type: String,
  amount: Float,
  date: Date,
  walletId: String,
  credit: Boolean,
  note: String
})

module.exports = mongoose.model('Transaction', transactionSchema)