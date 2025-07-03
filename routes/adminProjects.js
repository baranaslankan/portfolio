const express = require('express')
const router = express.Router()
const Project = require('../models/Project')

router.get('/', async (req, res) => {
  const projects = await Project.find()
  res.render('admin/projects', { projects })
})

router.get('/add', (req, res) => {
  res.render('admin/addProject')
})

router.post('/add', async (req, res) => {
  const { title, description, techStack, githubUrl, image } = req.body
  await Project.create({
    title,
    description,
    techStack: techStack.split(',').map(t => t.trim()),
    githubUrl,
    image
  })
  res.redirect('/admin/projects')
})

router.get('/delete/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id)
  res.redirect('/admin/projects')
})

module.exports = router 