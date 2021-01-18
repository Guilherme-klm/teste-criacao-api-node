const restful = require('node-restful')

const mongoose = restful.mongoose

const itemSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    cidade: {type: String, required: true},
    idade: {type: Number, min: 18, required: true }
})

module.exports = restful.model('Item', itemSchema)