const mongoose = require('mongoose')
const Schema = mongoose.Schema

const walletSchema = new Schema({
  name: String,
  type: String
})

module.exports = mongoose.model('Wallet', walletSchema)