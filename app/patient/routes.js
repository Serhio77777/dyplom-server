const express = require('express')
const router = express.Router()
const patientService = require('./service')
const validate = require('../middleware/validate-middleware')
const userValidator = require('./validator')

router.get('/patients', (req, res, next) => {
  patientService.getUserProfile(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.get('/patient/:id', (req, res, next) => {
  patientService.getPractitioner(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.post('/patient', (req, res, next) => {
  patientService.createPractitioner(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.put('/patient/:id', (req, res, next) => {
  patientService.updatePractitioner(req.body, req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})
module.exports = router