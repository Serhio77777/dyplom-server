const express = require('express')
const router = express.Router()
const patientService = require('./service')
const validate = require('../middleware/validate-middleware')
const userValidator = require('./validator')

// patient requests
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

// card note
router.get('/patients/:id/note', (req, res, next) => {
  patientService.getAllNotes(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.get('/patient/:id/note/:idNote', (req, res, next) => {
  patientService.getNote(req.params.id, req.params.idNote)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.post('/patient/:id/note', (req, res, next) => {
  patientService.createNote(req.body)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.put('/patient/:id/note/:idNote', (req, res, next) => {
  patientService.updateNote(req.body, req.params.id, req.params.idNote)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

module.exports = router