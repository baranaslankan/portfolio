const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
  name: String,
  level: String,
  category: String
})

module.exports = mongoose.model('Skill', skillSchema) 