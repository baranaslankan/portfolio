const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  githubUrl: String,
  image: String
})

module.exports = mongoose.model('Project', projectSchema) 