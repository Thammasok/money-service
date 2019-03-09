const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: String,
  type: String,
  icon: String
})

module.exports = mongoose.model('Category', categorySchema)