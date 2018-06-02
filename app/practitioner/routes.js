const express = require('express')
const router = express.Router()
const practitionerService = require('./service')
const validate = require('../middleware/validate-middleware')
const practitionerValidator = require('./validator')

router.get('/pratitioners', (req, res, next) => {
  practitionerService.getUserProfile(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.get('/pratitioner/:id', (req, res, next) => {
  practitionerService.getPractitioner(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.post('/pratitioner', (req, res, next) => {
  practitionerService.createPractitioner(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.put('/pratitioner/:id', (req, res, next) => {
  practitionerService.updatePractitioner(req.body, req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

module.exports = router
