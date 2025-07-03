require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin/projects', require('./routes/adminProjects'))
app.use('/admin/skills', require('./routes/adminSkills'))
app.use('/api', require('./routes/api'))

app.get('/', (req, res) => {
  res.redirect('/admin/projects')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Server started on port ' + port)
}) 