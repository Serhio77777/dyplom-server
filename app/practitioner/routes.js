const express = require('express')
const router = express.Router()
const practitionerService = require('./service')
const validate = require('../middleware/validate-middleware')
const practitionerValidator = require('./validator')

// practitioner
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

// practitioner buzy days
router.get('/practitioner/:id/buzy', (req, res, next) => {
  practitionerService.getPractitionerBuzyTime(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.delete('/practitioner/:id/buzy', (req, res, next) => {
  practitionerService.deletePractitionerBuzyTime(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.post('/practitioner/:id/buzy', (req, res, next) => {
  practitionerService.createPractitionerBuzyTime(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.put('/practitioner/:id/buzy', (req, res, next) => {
  practitionerService.updatePractitionerBuzyTime(req.body, req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

// practitioner schedule
router.get('/schedule/:id', (req, res, next) => {
  practitionerService.getPractitionerSchedule(req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.post('/schedule', (req, res, next) => {
  practitionerService.createPractitionerSchedule(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})

router.put('/practitioner/:id/schedule', (req, res, next) => {
  practitionerService.updatePractitionerSchedule(req.body, req.params.id)
    .then((user) => {
      res.json(user)
    })
    .catch(next)
})
// practitioner feedback
router.get('/pratitioner/:id/feedback', (req, res, next) => {
  practitionerService.getAllPractitionerFeedback(req.params.id)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

// router.get('/pratitioner/:id/feedback/:idFeedback', (req, res, next) => {
//   practitionerService.getPractitionerFeedback(req.body, req.params.id, req.params.idFeedback)
//     .then((answer) => {
//       res.json(answer)
//     })
//     .catch(next)
// })

router.post('/pratitioner/:id/feedback', (req, res, next) => {
  practitionerService.createPractitionerFeedback(req.body)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

router.put('/pratitioner/:id/feedback/:idFeedback', (req, res, next) => {
  practitionerService.updatePractitionerFeedback(req.body, req.params.id, req.params.idFeedback)
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

// specialization
router.get('/specialization', (req, res, next) => {
  practitionerService.getSpecialization()
    .then((answer) => {
      res.json(answer)
    })
    .catch(next)
})

module.exports = router
