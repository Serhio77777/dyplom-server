const express = require('express')
const router = express.Router()
const patientService = require('./service')
const validate = require('../middleware/validate-middleware')
const userValidator = require('./validator')

// patient requests
router.get('/patients/:id', (req, res, next) => {
  patientService.getAllUsers(req.params.id)
    .then((patients) => {
      return patientService.getAllPatientInfo(patients)
    })
    .then((patients) => {
      res.json(patients)
    })
    .catch(next)
})

router.get('/patient/:id', (req, res, next) => {
  patientService.getUserProfile(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.post('/patient', (req, res, next) => {
  patientService.createUserProfile(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.delete('/patient/:id', (req, res, next) => {
  patientService.deletePatient(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.put('/patient/:id', (req, res, next) => {
  patientService.updatePatient(req.body, req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

// card note

router.get('/note/:id', (req, res, next) => {
  patientService.getNote(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.post('/note', (req, res, next) => {
  patientService.createNote(req.body)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.put('/note/:id', (req, res, next) => {
  patientService.updateNote(req.body, req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.delete('/note/:id', (req, res, next) => {
  patientService.deleteNote(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

module.exports = router