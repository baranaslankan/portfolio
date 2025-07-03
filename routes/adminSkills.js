const express = require('express')
const router = express.Router()
const Skill = require('../models/Skill')

router.get('/', async (req, res) => {
  const skills = await Skill.find()
  res.render('admin/skills', { skills })
})

router.get('/add', (req, res) => {
  res.render('admin/addSkill')
})

router.post('/add', async (req, res) => {
  const { name, level, category } = req.body
  await Skill.create({ name, level, category })
  res.redirect('/admin/skills')
})

router.get('/delete/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id)
  res.redirect('/admin/skills')
})

module.exports = router 