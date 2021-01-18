const item = require("./item");

const Item = require('./item')

Item.methods(['get', 'put', 'post', 'delete'])

Item.updateOptions({new: true, runValidators: true})

module.exports = Item