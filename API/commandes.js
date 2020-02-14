let mongoose = require('mongoose')


const CommandeSchema = new mongoose.Schema({

   date: {
    type: String,
    required: true
  },
  products: {
    type: Array,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  users: {
    type: String,
    required: true
  }


})
var CommandeModel = mongoose.model('Commande', CommandeSchema)

module.exports = CommandeModel
